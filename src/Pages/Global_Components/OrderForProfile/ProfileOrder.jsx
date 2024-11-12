import React from 'react'
import styles from "./ProfileOrder.module.css"
export default function ProfileOrder({orderData}) {
  return (
    <div className={styles.order_profile}>
         <div className={styles.order_info}>
            <p><b>Order id: </b>{orderData.orderId}</p>
            <p><b>Status: </b>{orderData.status}</p>
         </div>
         <div className={styles.products_order}>
           <img  src={orderData.img} className={styles.order_img}/>
           <p><b>Name: </b>{orderData.name}</p>
           <p><b>quantity: </b>{orderData.quantity}</p>
           <p><b>Price: </b>{orderData.price}</p>
           <p><b>Address: </b>{orderData.address} </p>
           {orderData.status==="waiting for Confirmation"?<button className={styles.cnl_order}>Cancel</button>:""}
         </div>
    </div>
  )
}
