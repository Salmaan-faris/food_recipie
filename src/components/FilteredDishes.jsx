import React, { useState } from 'react'


function FilteredDishes(props) {
    let [AllMenus,setAllMenus]= useState( props.AllMenu)
    let [filterMenus,setfilterMenus]=useState([])
    let [activeDish,setActiveDish]=useState()

    console.log("All menus are", props.AllMenu)
 
    //show on cllick
    function showResultHandler(allList){
        setActiveDish(allList)
         let AllFilteredList=AllMenus.filter((item)=>{
        return item.strCategory === allList
       }).map((item)=>{
        return(
            <li>
                <img src={item.strMealThumb} alt="null" className='filterimg' />
                <h6>{item.strMeal}</h6>
            </li>
        )
       })
       setfilterMenus(AllFilteredList)
    }
    
// show all category    

  let AllCatergory= props.filterDishesAre.map((item)=>{
    return(
        <div>
             <li className={`${item.strCategory == activeDish ? "active" : ""} li-str`}  onClick={()=>{
            return(
                showResultHandler(item.strCategory)
            )
        }}>
             <div >
               {item.strCategory}

            </div>
            
        </li>
          

        </div>
       
    )
  })

  return (
    <div className='Filtered-Dishes '>
        <div className='container text-align'>
            <h2>
                choose your Dishes
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima. Ut in atque cupiditate quos modi, recusandae quaerat accusantium accusamus debitis fuga itaque! Reiciendis, nostrum.

          </p>
        </div>
        <div className="filtered-Dishes-list container-90">
            <ul className='textcolor'>
                {AllCatergory}
            </ul>
        </div>\
        <div className="filtered-Dishes-result container  ">
            <ul className="filterList ">

                {filterMenus.length > 0 ? filterMenus: <div className='filterList1'><h2 className='item-found'>there is no item found...choose an item</h2> </div>}
                {/* {filterMenus} */}
                

            </ul>
        </div>
       
    </div>
  )
}

export default FilteredDishes
 

//{item.strCategory == activeDish ? "active" : ""} 