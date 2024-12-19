import React, { useState } from 'react'
import styles from "./ProductsCard.module.css"
import useCartContext from "../../../Hooks/useCartContext"
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
export default function ProductsCard({card_data}) {
    const navigate =useNavigate()
     let love_react=0
     if(card_data.likes.length<1000){
      love_react=card_data.likes.length
     }else if(card_data.likes.length<1000000){
      love_react=card_data.likes.length/1000 + "K"
     }
     else{
      love_react=card_data.likes.length/1000000 +"M"
     }

     const {cartitem,setcartitem}=useCartContext()


     const Buynow=()=>{
      setcartitem([...cartitem,{...card_data}])
      navigate("/cart")
     }
     const AddToCart=()=>{
      setcartitem([...cartitem,{...card_data}])
     }
     const [love,setlove]=useState(false)
  return (
    <div className={styles.card}>
       <div className={styles.img_div}>
        <img src={`${import.meta.env.VITE_SERVER_URL}/users/img?name=${card_data.file.filename}`} className={styles.img}/>
       </div>
       <div className={styles.card_bio}>
          <div className={styles.card_pricing_buying}>
            <div className={styles.card_name}>
              <p><b><i>{card_data.name}</i></b> /-- </p>
              <Link> {card_data.userid.username}</Link>
            </div>
            <div className={styles.card_pricing}>
               <div className={love?styles.love_status1:styles.love_status2}> <p className={styles.love_icon}>< FaHeart onClick={()=>setlove(!love)} /> &nbsp;</p>{love_react}</div>
               <div className={styles.pricing}>Price: <p className={styles.pricing_amount}> {card_data.price}৳</p></div>
               <p className={styles.artavailable}><b>{card_data.available}</b></p>
            </div>
            <div className={styles.buy_add_cart}>
              <button className={styles.buy_btn} onClick={Buynow}>Buy Now</button>
              <button className={styles.cart_btn} onClick={AddToCart}>Add to Cart</button>
            </div>
          </div>
          <div className={styles.cart_detiels}>
              <p>{card_data.bio}</p>
          </div>
       </div>
    </div>
  )
}
