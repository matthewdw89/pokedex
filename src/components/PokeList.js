import React from 'react';

import PokeCell from './PokeCell'

const PokeList = ({pokemon, find}) => {
  return (
    <section className="poke__list">
      { 
        find
          ? find.map( (each, index) => {
            return <PokeCell name={each.name} key={index}/>
          })
          : pokemon 
            ? pokemon.map( (each, index) => {
              return <PokeCell name={each.name} key={index}/>
            })
            : <h1>Loading...</h1>
      }
    </section>
  )
}


export default PokeList;