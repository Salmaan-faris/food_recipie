import React from 'react'

function Addtocart({addToCarts}) {
  //console.log("cart is ",addToCart.cartImg)
  let addTocartResult=addToCarts.map((item)=>{
    return(
      <div className='cart'>

           <img src={item.cImg} alt="" />
           <h6>{item.cTitle}</h6>
      </div>

    )
  })

    
  return (
    <div className='addto-cart'>
        <div className="addto-cart-item">
           {addTocartResult}
        </div>
    </div>
  )
}

export default Addtocart
