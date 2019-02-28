import React from 'react';

import PokeCell from './PokeCell'

const PokeList = ({pokemon, find}) => {
  return (
    <section className="poke__list">
      { 
        find
          ? find.map(each => {
            return <PokeCell name={each.name} />
          })
          : pokemon 
            ? pokemon.results.map( each => {
              return <PokeCell name={each.name} />
            })
            : <h1>Loading...</h1>
      }
    </section>
  )
}


export default PokeList;