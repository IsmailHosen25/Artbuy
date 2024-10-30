import React from 'react'
import styles from "./ProductsCard.module.css"
import img from "../../../assets/art_img.jpg"
import { MdFavoriteBorder } from "react-icons/md";
export default function ProductsCard() {
    const price=100
    const like="10k"
  return (
    <div className={styles.card}>
       <div className={styles.img_div}>
        <img src={img} className={styles.img}/>
       </div>
       <div className={styles.card_bio}>
          <div className={styles.card_pricing_buying}>
            <div className={styles.card_pricing}>
               <div className={styles.love_status}> <p className={styles.love_icon}>< MdFavoriteBorder  /> </p>{like}</div>
               <div className={styles.pricing}>Price: <p className={styles.pricing_amount}> {price}৳</p></div>
               <p className={styles.artavailable}><b>Available</b></p>
            </div>
            <div className={styles.buy_add_cart}>
              <button className={styles.buy_btn}>Buy Now</button>
              <button className={styles.cart_btn}>Add to Cart</button>
            </div>
          </div>
          <div className={styles.cart_detiels}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam libero autem eius.</p>
          </div>
       </div>
    </div>
  )
}
