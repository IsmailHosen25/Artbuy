import React from 'react'
import styles from "./ProductsCard.module.css"
import { MdFavoriteBorder } from "react-icons/md";
export default function ProductsCard({card_data}) {
     let love_react=0
     if(card_data.like<1000){
      love_react=card_data.like
     }else if(card_data.like<1000000){
      love_react=card_data.like/1000 + "K"
     }
     else{
      love_react=card_data.like/1000000 +"M"
     }
     const Buynow=()=>{
       console.log(card_data)
     }
     const AddToCart=()=>{
      console.log(card_data)
     }
  return (
    <div className={styles.card}>
       <div className={styles.img_div}>
        <img src={card_data.img} className={styles.img}/>
       </div>
       <div className={styles.card_bio}>
          <div className={styles.card_pricing_buying}>
            <div className={styles.card_pricing}>
               <div className={styles.love_status}> <p className={styles.love_icon}>< MdFavoriteBorder  /> </p>{love_react}</div>
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
