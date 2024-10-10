import React, { useContext, useState } from 'react'
import Popup from './Popup'
import {AllMenuContext} from './menu'
import Addtocart from './Addtocart'




function SpecialDishes() {
 let allMenu=useContext(AllMenuContext)
 

  let [showPopup,setShowPopup]=useState(false)
  let [currentDish,setCurrentDish]= useState('')
  let [orderImg,setOrderImg]=useState()
  let [orderTitle,setOrderTitle]=useState()

  let maxDishes=8

  function showPopupHandler(dishName){
    
   // console.log( "the dish is",dishName)
    setShowPopup(true)
    setCurrentDish(dishName)
  }

  //order handler
  const orderNowHandler=(cartImg,carttitle)=>{
    setOrderImg(cartImg)
    setOrderTitle(carttitle)
    

  }
  
  let specialMeals=allMenu.map((menuItem,index)=>{
    
    if(index<maxDishes){
      
      return(
        <li>
         <a  href='javaScript:;' onClick={()=>{
             return showPopupHandler(menuItem)
             
         }}>
           <img className='img2' src={menuItem.strMealThumb} alt="null" />
           <h6>{menuItem.strMeal}</h6>
         </a>
       </li>

     
   )
   

    }
     
  })
  return (
    
    <section className='Special-Dishes'>
      {showPopup && <Popup setShowPopup={setShowPopup} currentDish={currentDish} orderNowHandler={orderNowHandler}/>}
      
        <div className="container">
          <Addtocart orderImg={orderImg} orderTitle={orderTitle} />
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

