import React from 'react';
import '../../assets/css/card.css'

const CardItem = () => {
  return (
    <div className='cardItem col-3 col-sm-3 col-md-3 col-lg-3'>
      <img className='img-fluid' src='/images/2.jpg' alt="" />
      <div className="text">
        <h6>Iphone 14</h6>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default CardItem
