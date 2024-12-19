import React, { useState } from 'react'
import styles from "./ArtistTimeline.module.css"
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { useFormik } from 'formik';
import axios from 'axios';
export default function ArtistTimeline({card_data}) {
    const formik =useFormik({
        initialValues:{
          id:card_data._id,
          name:card_data.name,
          price:card_data.price,
          available:card_data.available,
          about:card_data.about
          
        },onSubmit:async (values)=>{
        const res=await axios.put(`${import.meta.env.VITE_SERVER_URL}/artist//updateart`,values,{withCredentials:true})
        if(res.data.request==="Accepted"){
          window.location.reload()
        }else{
          alert(res.data.error)
        }
        } 
      })
    let love_react=0
    if(card_data.likes.length<1000){
     love_react=card_data.likes.length
    }else if(card_data.likes.length<1000000){
     love_react=card_data.likes.length/1000 + "K"
    }
    else{
     love_react=card_data.likes.length/1000000 +"M"
    }
    const [edit,setedit]=useState(false)
   const  DeleteNow=async()=>{
        const res=await axios.delete(`${import.meta.env.VITE_SERVER_URL}/artist/deleteart/${card_data._id}`,{withCredentials:true})
        if(res.data.request==="Accepted"){
          window.location.reload()
        }else{
          alert(res.data.error)
        }
    }
  return (
    <div className={styles.card}>
       <div className={styles.img_div}>
        <img src={`${import.meta.env.VITE_SERVER_URL}/users/img?name=${card_data.file.filename}`} className={styles.img}/>
       </div>
       <form className={styles.card_bio} onSubmit={formik.handleSubmit}>
          <div className={styles.card_pricing_buying}>
            <div className={styles.card_name}>
              {edit?<input type='text' placeholder='Name of the Art' name='name' value={formik.values.name} onChange={formik.handleChange}/>
              :
              <p><b><i>{card_data.name}</i></b></p>
              }
            </div>
            <div className={styles.card_pricing}>
               <div className={styles.love_status}> <p className={styles.love_icon}>< MdFavoriteBorder  /> </p>{love_react}</div>
               <div className={styles.pricing}>Price: 
                {edit? <input type='number' placeholder='Price' name='price' value={formik.values.price} onChange={formik.handleChange}/>
                :
                <p className={styles.pricing_amount}> {card_data.price}৳</p>
                }
                </div>
                {
                    edit?
                    <div className={styles.radio_btn}>
                       <label className={styles.select_lable}>Available: </label>
                       <input type="radio" value="Available" name="available" checked={formik.values.available==="Available"} className={styles.radio} onChange={formik.handleChange}/> Yes
                       <input type="radio" value="Not Available" name="available" checked={formik.values.available==="Not Available"} className={styles.radio} onChange={formik.handleChange}/> No 
                    </div>:
                    <p className={styles.artavailable}><b>{card_data.available}</b></p>
                }
              
            </div>
            <div className={styles.del_add_sav}>
              <button className={styles.delete_btn} onClick={DeleteNow}>Delete <FaTrashCan /></button>
              {
                edit? <button className={styles.save_btn} type='submit'>Save</button>
                :
                <div className={styles.edit_btn} onClick={()=>setedit(true)}>Edit<MdOutlineModeEditOutline/></div>
              }
            </div>
          </div>
          <div className={styles.cart_detiels}>
            {edit?<textarea rows="2" cols="90" name="about" className={styles.detiels_input} value={formik.values.about} onChange={formik.handleChange}/>
            :
              <p>{card_data.about}</p>
            }
          </div>
       </form>
    </div>
  )
}
