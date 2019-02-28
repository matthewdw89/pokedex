import React from 'react';


const DetailView = () => {

  return (
    <section className="detail-view">
      <img className='sprite-image' alt="Clicked pokemon" />
      <div className='data-wrapper'>
        <h1 className='data-name'></h1>
        <p className="data-char"></p>
      </div>
    </section>
  )
}

export default DetailView;