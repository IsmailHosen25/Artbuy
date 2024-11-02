import ProductsCard from "../Global_Components/ProductsCard/ProductsCard"
import styles from "./Home.module.css"
import React from 'react'
import img from "../../assets/art_img.jpg"
const card_datas=[{
  "img":img,
  "like":2300,
  "price":790,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
  {
  "img":img,
  "like":999,
  "price":250,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "like":20000,
  "price":290,
  "available":"Not Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},{
  "img":img,
  "like":1000,
  "price":2500,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
},
{ "img":img,
  "like":2000000,
  "price":3680,
  "available":"Available",
  "bio":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius."
}]
export default function Home() {
  return (
    <div className={styles.hello}>
      <div className={styles.store}>
        {
          card_datas.map((item,i)=><ProductsCard card_data={item}/>
          )
        }
      </div>
    </div>
  )
}
