
import React from 'react'
import { useState ,useEffect} from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes'
import Header from './header'


function Menus() {
const [menu,setMenu]=useState([])  
const [FilterCatagory,setFilterCatagory]=useState([])
const [loading,setLoading]=useState(true)

async function getAllMenus(){
     const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    let response = await fetch(API_URL)
    let data = await response.json()
    setMenu(data.meals)
    setLoading(false)
    
}

async function getAllCategory(){
  const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
 let response = await fetch(API_URL)
 let categeryData = await response.json()
//  console.log("category are ",categeryData)
setFilterCatagory(categeryData.categories)
 
}


useEffect(()=>{
     getAllMenus()
     getAllCategory()

},[])




  return (
    <div>
       <Header/>
       <Hero/>
       {!loading ? <SpecialDishes specialMenu={menu}/> : <h2>Loading........</h2>}
       {!loading ? <FilteredDishes filterDishesAre={FilterCatagory} AllMenu={menu} /> : null}
       
    </div>
  )

}

export default Menus

