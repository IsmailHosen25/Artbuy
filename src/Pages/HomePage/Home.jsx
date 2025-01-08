import ProductsCard from "../Global_Components/ProductsCard/ProductsCard"
import styles from "./Home.module.css"
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Nav from "../Global_Components/Nav/Nav";
import Footer from "../Global_Components/Footer/Footer";
import axios from "axios"


export default function Home() {
  const [card_data,setcard_data]=useState([])
  const [search ,setsearch]=useState("")
  const [category,setcategory]=useState("")
  const filter=(data)=>{
    return data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())&&item.category.includes(category))
  }
  const getdata= async()=>{
    const res=await axios.get(`${import.meta.env.VITE_SERVER_URL}/users/getallarts`,{withCredentials:true})
    if(res.data.request==="Accepted"){
           setcard_data(res.data.data)
    }else{
      console.log(res.data)
    }

  }
  useEffect(()=>{
       getdata()
  },[])
  return (
    <>
    <Nav/>
    <div className={styles.home_main}>
    <div className={styles.filter}>
      <div className={styles.select_categories}>
          <label htmlFor='size' className={styles.categories_label}>Art Category: </label>
          <select name="size" id='size' onChange={(e)=>setcategory(e.target.value)} className={styles.select_input_categories}>
            <option defaultChecked >Choose ...</option>
            <option>Landscape</option>
            <option>Animals</option>
            <option>Fashion</option>
            <option>Nature</option>
            <option>Urban</option>
            <option>Historical</option>
            <option>Religion</option>
            <option>Self Portrait</option>
          </select>
      </div>
      <div className={styles.search_var}>
        <IoSearchSharp className={styles.search_icon}/>
        <input type="text" placeholder="Search by Name ..." className={styles.search} onChange={(e)=>setsearch(e.target.value)}/>
      </div>
    </div>
      <div className={styles.store}>
        {
          filter(card_data).map((item,i)=><ProductsCard key={i} card_data={item}/>)
        }
      </div>
      <Footer/>
    </div>
    </>
  )
}
