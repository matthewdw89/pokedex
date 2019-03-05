import React from 'react';


const DetailView = (props) => {
  return (
    <section className="detail__view">
      <img className='sprite__image' alt="Clicked pokemon" src={props.pokemon || "https://i.imgur.com/aDz70Ty.jpg"}/>
      <div className='detail__wrapper'>
        <h1 className='data-name'>{props.title || "Pokemon"}</h1>
        <p className="data-char"></p>
      </div>
    </section>
  )
}

export default DetailView;