import React, { Component } from 'react';
import './styles/App.scss';

import PokeList from './components/PokeList';

class App extends Component {
  state = {
    pokemon: false,
    search: ""
  }

  searchPokemon = (e) => {
    let find = this.state.pokemon.results.filter( each => {
      return each.name.indexOf(e.target.value) !== -1
    })
    this.setState({
      search: find
    })
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
      .then( res => res.json())
      .then( data => {
        this.setState({
          pokemon: data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.searchPokemon}/>
        <PokeList pokemon={this.state.pokemon} find={this.state.search}/>
  
      </div>
    );
  }
}

export default App;
