import ProductsCard from "../Global_Components/ProductsCard/ProductsCard"
import styles from "./Home.module.css"
import React, { useEffect, useState } from 'react'
import art1 from "../../assets/art1.jpg"
import art2 from "../../assets/art2.jpg"
import art3 from "../../assets/art3.jpg"
import art4 from "../../assets/art4.jpg"
import { IoSearchSharp } from "react-icons/io5";
import Nav from "../Global_Components/Nav/Nav";
import Footer from "../Global_Components/Footer/Footer";

const card_datas=[{
  "img":art1,
  "quantity":1,
  "name":"mona Lisa",
  "like":230000,
  "price":790,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
  {
  "img":art2,
  "quantity":1,
  "name":"Starry Night",
  "like":999,
  "price":250,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art3,
  "quantity":1,
  "name":"beauty girl",
  "like":20000,
  "price":290,
  "available":"Not Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art4,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":art1,
  "name":"mona Lisa",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art2,
  "name":"Starry Night",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":art3,
  "name":"beauty girl",
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":art4,
  "name":"smoking man",
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":art1,
  "name":"mona Lisa",
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
    <>
    <Nav/>
    <div className={styles.hello}>
      <div className={styles.search_var}>
        <IoSearchSharp className={styles.search_icon}/>
        <input type="text" placeholder="Search by Name ..." className={styles.search} onChange={(e)=>setquery(e.target.value)}/>
      </div>
      <div className={styles.store}>
        {
          search(card_datas).map((item,i)=><ProductsCard key={i} card_data={item}/>)
        }
      </div>
      <Footer/>
    </div>
    </>
  )
}
