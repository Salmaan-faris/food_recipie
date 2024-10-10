import React from 'react'

function Addtocart({orderImg,orderTitle}) {
    
  return (
    <div className='addto-cart'>
        <div className="addto-cart-item">
            <img src={orderImg} alt="" />
            <h6>{orderTitle}</h6>
        </div>
    </div>
  )
}

export default Addtocart
