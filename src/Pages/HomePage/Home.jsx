import ProductsCard from "../Global_Components/ProductsCard/ProductsCard"
import styles from "./Home.module.css"
import React, { useState } from 'react'
import img from "../../assets/art_img.jpg"

import { IoSearchSharp } from "react-icons/io5";

const card_datas=[{
  "img":img,
  "name":"hello Name1",
  "like":2300,
  "price":790,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
  {
  "img":img,
  "name":"hello Name2",
  "like":999,
  "price":250,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "name":"hello Name3",
  "like":20000,
  "price":290,
  "available":"Not Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "name":"hello Name4",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":img,
  "name":"hello Name5",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
}]
export default function Home() {
  const [query ,setquery]=useState("")
  const search=(data)=>{
    return data.filter(item=>item.name.toLowerCase().includes(query))
  }
  return (
    <div className={styles.hello}>
      <div className={styles.search_var}>
        <IoSearchSharp className={styles.search_icon}/>
        <input type="text" placeholder="Search by Name ..." className={styles.search} onChange={(e)=>setquery(e.target.value)}/>
      </div>
      <div className={styles.store}>
        {
          search(card_datas).map((item,i)=><ProductsCard card_data={item}/>)
        }
      </div>
    </div>
  )
}
