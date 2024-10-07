import React, { useState } from 'react'
import Popup from './Popup'

function SpecialDishes(props) {

  let [showPopup,setShowPopup]=useState(false)

  let maxDishes=8

  function showPopupHandler(){
    setShowPopup(true)
  }
  
  let specialMeals=props.specialMenu.map((menuItem,index)=>{
    if(index<maxDishes){
      return(
        <li>
         <a  href='javaScript:;' onClick={showPopupHandler}>
           <img className='img2' src={menuItem.strMealThumb} alt="null" />
           <h6>{menuItem.strMeal}</h6>
         </a>
       </li>

     
   )

    }
     
  })
  return (
    
    <section className='Special-Dishes'>
      {showPopup && <Popup setShowPopup={setShowPopup}/>}
      
        <div className="container">
            <div className="special-Dishes-content text-align container1">
                <h2>our special Dishes are</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ea id illo, quaerat corporis veniam officiis magni sint nemo perspiciatis impedit et est, dicta molestias?</p>
            </div>
            <div className="special-Dishes-Menu">
              <ul className='flex flex-wrap'>
                 {specialMeals}
              </ul>
            </div>
        </div>   
      
    </section>
  )
  

}

export default SpecialDishes 

