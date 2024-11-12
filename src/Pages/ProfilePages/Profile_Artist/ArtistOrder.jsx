import { useState } from 'react'
import styles from './ArtistOrder.module.css'
import { useEffect } from 'react'
export default function ArtistOrder({orderData}) {

    const [btnStatus,setBtnStatus]=useState("")
    const handleBtnStatus=()=>{
        if(orderData.status==="canceled"){
            setBtnStatus("")
      }
      else if(orderData.status==="waiting for Confirmation"){
          setBtnStatus("Confirm")
      }
      else if(orderData.status==="Confirmed"){
          setBtnStatus("Assigned to rider")
      }
      else if(orderData.status==="Assigned to rider"){
        setBtnStatus("delivered")
      }
      else{
          setBtnStatus("")
      }
    }
useEffect(()=>{
    handleBtnStatus()
},[])
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
           {btnStatus===""||btnStatus===""?
           "":
           btnStatus==="Confirm"?
           <>
            <button className={styles.order_status}>{btnStatus}</button>
            <button className={styles.order_cnl}>cancel</button>
           </>
           :
           <button className={styles.order_status}>{btnStatus}</button>
           }
         </div>
    </div>
  )
}
