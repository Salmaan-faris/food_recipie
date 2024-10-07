import React from 'react'

function Popup(props) {
     
    function closePopupHandle(){
        props.setShowPopup(false)
        //closePopup(false)
    }
  return (

    <div className='popup'>
      <div className="popup-content">
        <h2> 
            description will show here           
        </h2>
        <button>order now</button>
        <h5 onClick={closePopupHandle} className='popup-close'> close</h5>
      </div>
    </div>
  )
}

export default Popup
