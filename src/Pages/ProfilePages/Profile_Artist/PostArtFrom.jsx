import React from 'react'
import styles from "./PostArtFrom.module.css"
import input_img_icon from "../../../assets/input_img_icon.png"

import { useFormik } from "formik"
import * as yup from "yup"
import axios from 'axios'

export default function PostArtFrom() {

    const formik =useFormik({
        initialValues:{
          artimg:"",
          name:"",
          category:"",
          price:"",
          available:"",
          about:""
        },
        validationSchema:yup.object({
          artimg:yup.string()
          .required("Photo is required"),
          name:yup.string()
                  .required("name is required"),
           category:yup.string()
                  .required("Category is required"),
          price:yup.number()
                .required("Price is required"),
          available:yup.string()
                   .required("available is required"),
          about:yup.string()
                  .required("about is required")
        }),onSubmit:async (values)=>{
            const confirmation=confirm("are you sure?")
            if(confirmation){
                const formdata=new FormData()
                formdata.append("artimg",values.artimg)
                formdata.append("name", values.name)
                formdata.append("price",values.price)
                formdata.append("available",values.available)
                formdata.append("category",values.category)
                formdata.append("about",values.about)
                const res=await axios.post(`${import.meta.env.VITE_SERVER_URL}/artist/addarts`,formdata,{withCredentials:true})
                window.location.reload(false);
            }
        }
      })


  return (
    <div className={styles.post_art_form}>
        <div className={styles.form_div}>
            <h2 className={styles.form_title}>Add Your Art</h2>
            <form className={styles.form_main} onSubmit={formik.handleSubmit}>
                <div>
                    <input type='file' id='file' name='artimg' accept='image/*' className={styles.input_img}
                    onChange={(e)=>{
                        formik.setFieldValue("artimg", e.target.files[0])
                    }}
                    />
                    <label htmlFor='file' className={styles.input_img_label}>
                        <img src={input_img_icon} className={styles.input_img_icon}/>
                        Upload photo
                    </label>
                </div>
                <div className={styles.input_div}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' placeholder='Name of the Art'  className={styles.input_main} name='name' value={formik.values.name} onChange={formik.handleChange}/>
                </div>
                <div className={styles.input_div}>
                    <label htmlFor='category'>Category: </label>
                    <select name="category" id='category' onChange={formik.handleChange} className={styles.select}>
                        <option defaultChecked >Choose ...</option>
                        <option>Landscape</option>
                        <option>Animals</option>
                        <option>Fashion</option>
                        <option>Nature</option>
                        <option>Urban</option>
                        <option>Historical</option>
                        <option>Religion</option>
                        <option>Self Portrait</option>
                    </select>
                </div>
                <div className={styles.input_div}>
                    <label htmlFor='price'>Price: </label>
                    <input type='number' id='price' placeholder='Price Of the Art' className={styles.input_main} name='price' value={formik.values.price} onChange={formik.handleChange}/>
                </div>
                <div className={styles.radio_btn}>
                        <label className={styles.select_lable}>Available: </label>
                        <input type="radio" value="Available" name="available" className={styles.radio} onChange={formik.handleChange}/> Available
                        <input type="radio" value="Not Available" name="available" className={styles.radio} onChange={formik.handleChange}/> Not Available
                </div>
                <div className={styles.input_div}>
                    <label htmlFor='About'>About: </label>
                    <input type='text' id='About' placeholder='define the Art' className={styles.input_main} name='about' value={formik.values.about} onChange={formik.handleChange}/>
                </div>
                <button  className={styles.btn} type='submit'>Save</button>
            </form>
        </div>
    </div>
  )
}
