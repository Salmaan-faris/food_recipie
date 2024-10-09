import React from 'react'

function Popup({setShowPopup,currentDish}) {
  console.log("the current dish is",currentDish)
 
     
    function closePopupHandle(){
        setShowPopup(false)
        //closePopup(false)
    }
  return (

    <div className='popup'>
      <div className="popup-content">
        <div className='Popup-content-data'>
          <img src={currentDish.strMealThumb} alt="" />

        </div>
        <p>{currentDish.strInstructions}</p>
        <h2 > 
            {currentDish.strMeal}       
        </h2>
        <button>order now</button>
        
        <h5 onClick={closePopupHandle} className='popup-close'> close</h5>
      </div>
    </div>
  )
}

export default Popup
