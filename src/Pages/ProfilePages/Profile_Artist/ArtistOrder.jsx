import { useState } from 'react'
import styles from './ArtistOrder.module.css'
import { useEffect } from 'react'
import axios from 'axios'
export default function ArtistOrder({orderData}) {

    const [btnStatus,setBtnStatus]=useState("")
    const handleBtnStatus=()=>{
        if(orderData.status==="canceled"){
            setBtnStatus("")
      }
      else if(orderData.status==="waiting for Confirmation"){
          setBtnStatus("Confirmed")
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
const statusbtn=()=>{
  const confirmation=confirm("are you sure?")
  const data={
    "status":btnStatus,
    "id":orderData._id
  }
    if(confirmation){
      const res= axios.put(`${import.meta.env.VITE_SERVER_URL}/artist/orderstatusudt/${orderData._id}`,data,{withCredentials:true})
      if(res.data.request==="Accepted"){
        window.location.reload()
      }
    }
    else{
      alert("somthing wrong , please try again")
    }
}
    const cancelorder=async()=>{
      const confirmation=confirm("are you sure?")
      const data={
            "status":"canceled",
            "id":orderData._id
      }
      if(confirmation){
        const res= axios.put(`${import.meta.env.VITE_SERVER_URL}/artist/orderstatusudt/${orderData._id}`,data,{withCredentials:true})
        if(res.data.request==="Accepted"){
          window.location.reload()
        }
      }
      else{
        alert("somthing wrong , please try again")
      }
    }

useEffect(()=>{
    handleBtnStatus()
},[])
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
           {btnStatus===""||btnStatus===""?
           "":
           btnStatus==="Confirm"?
           <>
            <button className={styles.order_status} onClick={()=>statusbtn()}>{btnStatus}</button>
            <button className={styles.order_cnl} onClick={()=>cancelorder()}>cancel</button>
           </>
           :
           <button className={styles.order_status} onClick={()=>statusbtn()}>{btnStatus}</button>
           }
         </div>
    </div>
  )
}
