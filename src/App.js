import React, { Component } from 'react';
import './styles/App.scss';

import PokeList from './components/PokeList';
import DetailView from './components/DetailView';

class App extends Component {
  state = {
    pokemon: null,
    pokemonList: null,
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
          pokemonList: data.results
        })
      })
  }

  render() {
    return (
      <div className="App">
        {/* <input onChange={this.searchPokemon}/> */}
        <PokeList pokemon={this.state.pokemonList} find={this.state.search}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
