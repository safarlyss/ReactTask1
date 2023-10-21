import React from 'react';
import CardItem from './CardItem'

const Card = () => {
  return (
    <section className='cards my-3'>
      <div className="container">
       <div className="row mx-0 justify-content-between align-items-center">
       <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
       </div>
      </div>
    </section>
  )
}

export default Card
