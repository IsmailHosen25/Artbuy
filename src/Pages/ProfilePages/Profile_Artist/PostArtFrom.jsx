import React from 'react'
import styles from "./PostArtFrom.module.css"
import input_img_icon from "../../../assets/input_img_icon.png"

import { useFormik } from "formik"
import * as yup from "yup"

export default function PostArtFrom() {

    const formik =useFormik({
        initialValues:{
          artimg:"",
          name:"",
          price:"",
          available:"",
          about:""
        },
        validationSchema:yup.object({
          artimg:yup.string()
          .required("Photo is required"),
          name:yup.string()
                  .required("name is required"),
          price:yup.number()
                .required("Price is required"),
          available:yup.string()
                   .required("available is required"),
          about:yup.string()
                  .required("about is required")
        }),onSubmit:async (values)=>{
            const confirmation=confirm("are you sure?")
            if(confirmation){
                console.log(values)
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
