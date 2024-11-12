import styles from './Cart.module.css'
import useCartContext from "../../Hooks/useCartContext"
import { useNavigate,Link } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

export default function Cart() {


  const  [chform,setchform]=useState(false)
  const navigate =useNavigate()

  const {cartitem,setcartitem}=useCartContext()
  const handlecheckout=()=>{
     setchform(true)
  }


  const formik=useFormik({
    initialValues:{
            address:"",
            number:" "
    },validationSchema:yup.object({
      address:yup.string()
              .required("address is required"),
      number:yup.number()
                .required("Number is required"),
})
    , onSubmit:(values)=>{
      alert("submitted successfully")
      setcartitem([])
      navigate("/")
    }
    
  })
  return (
    <div className={styles.cart}>
      <div className={styles.cartin}>

      <div className={styles.products}>
      <div className={styles.back_to_home}>
        <p>Back to&ensp;</p>
        <Link to="/" className={styles.bth_link}> Home</Link>
      </div>
        <div>
          <h1 className={styles.title}>Your Products:</h1>
          <p className={styles.headingp}>You have {cartitem.length} Products</p>
        </div>

          <div className={styles.item}>
            <div className={styles.itemtag}>
              <p className={styles.ptable} >Art</p>
              <p className={`${styles.ptable} ${styles.nodisp}`}>Name</p>
              <p className={styles.ptable}>Price</p>
              <p className={styles.ptable}>Quantity</p>
              <p className={styles.ptable}>Total Amount</p>
              <p className={styles.ptable}>Delete</p>
            </div>
          {cartitem.length==0? <div className={styles.lodiv}>
            <p className={`${styles.ptable} ${styles.nodisp}`}>0</p>
            <p className={styles.ptable}>0</p>
            <p className={styles.ptable}>0</p>
            <p className={styles.ptable}>0</p>
          </div>:""}
          {cartitem.map((item,i)=>
          
          <div key={i} className={styles.itemdata}>
            <img src={item.img} className={styles.ptable}/>
            <h1 className={`${styles.ptable} ${styles.nodisp}`}>{item.name}</h1>
            <p className={styles.ptable}>${item.price}</p>
            <div className={`${styles.quantity} ${styles.ptable}`}>

              <button onClick={()=>{
                      
                      const newcart=cartitem.map((item,index)=>{
                        return index===i? {...item, quantity:item.quantity<=1? 1: item.quantity-1}:item
                      })
                      setcartitem(newcart)
                       


              }}>-</button>
              <p>{item.quantity}</p>
              <button  onClick={()=>{
                      
                      const newcart=cartitem.map((item,index)=>{
                        return index===i? {...item, quantity:item.quantity+1}:item
                      })
                    setcartitem(newcart)
              }}>+</button></div>


            <p className={styles.ptable}>${item.price*item.quantity}</p>
            <div className={styles.ptable}>
            <button className={styles.btn} onClick={()=>{
                        
                        const newcart=cartitem.filter((item,inedx)=> {return inedx !==i})
                        setcartitem(newcart)

            }}><FaRegTrashAlt /></button>
            </div>
          </div>
          )}
          <p className={styles.finalamount}>Final Amount: {cartitem.map(item=> item.price*item.quantity).reduce((total,value)=>total+value,0)}  </p>
          <div className={styles.checkout}>
            {chform ? <p className={styles.pforch}>Pleass fill the from below</p>:""}
            {cartitem.length >0 ? <button onClick={handlecheckout}>Check Out</button>:"" }
              
          </div>
        </div>
      </div>

      {chform ? <div className={styles.checkoutform}>
        <h1>Fill This Form: </h1>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <input type='text' placeholder='Write your Address' name='address' value={formik.values.address} onChange={formik.handleChange}/>
          <label><i>{formik.errors.address}</i></label>
          <input type='number' placeholder='Write your Number' name="number" value={formik.values.number} onChange={formik.handleChange}/>
          <label><i>{formik.errors.number}</i></label>
          <button type='submit' className={styles.btnf}><GrSend/></button>
        </form>
      </div>:"" }
   
      </div>
    </div>
  )
}
