import React from 'react'
import styles from "./ProfileOrder.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function ProfileOrder({orderData,reload}) {
  const cancelorder=async()=>{
    const confirmation=confirm("are you sure?")
    const data={
          "status":"canceled",
          "id":orderData._id
    }
    if(confirmation){
      const res= axios.put(`${import.meta.env.VITE_SERVER_URL}/buyer/orderstatusudt/${orderData._id}`,data,{withCredentials:true})
      if(res.data.request==="Accepted"){
        reload()
      }
    }
  }
  
  
  
  return (
    <div className={styles.order_profile}>
         <div className={styles.order_info}>
            <p><b>Order id: </b>{orderData._id}</p>
            <p><b>Status: </b>{orderData.status}</p>
         </div>
         <div className={styles.products_order}>
           <img  src={`${import.meta.env.VITE_SERVER_URL}/users/img?name=${orderData.file.filename}`} className={styles.order_img}/>
           <p><b>Name: </b>{orderData.name}</p>
           <p><b>quantity: </b>{orderData.quantity}</p>
           <p><b>Price: </b>{orderData.price}</p>
           <p><b>Address: </b>{orderData.address} </p>
           {orderData.status==="waiting for Confirmation"?<button className={styles.cnl_order} onClick={()=>cancelorder()}>Cancel</button>:""}
         </div>
    </div>
  )
}
