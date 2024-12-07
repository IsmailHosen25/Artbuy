import styles from "./Nav.module.css"
import React, { useEffect, useState } from 'react'
import useCartContext from "../../../Hooks/useCartContext";
import { useNavigate } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiPencil } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";

export default function Nav() {
  const {cartitem,setcartitem}=useCartContext()
  const navigate =useNavigate()
  const [login,setlogin]=useState(false)
  useEffect(()=>{setlogin(window.localStorage.getItem("login"))},[])
  const [cartvalue,setcartvalue]=useState(0)
  const LoginHandle=()=>{
    navigate("/login")
  }
  const SignupHandle=()=>{
    navigate("/signup")
  }
  const storehandle=()=>{
    navigate("/")
  }
  const profileHandle=()=>{
    const username=window.localStorage.getItem("username")
    // if(usertype==="Artist")
    // navigate('/profile_artist')
    // else{
    //   navigate('/profile_buyer')
    // }
    navigate(`/profile?username=${username}`)
  }
 
  return (<div className={styles.nav}>
    <div className={styles.nav_desing}>
       <div className={styles.nave_name_desing}>
        <h3 className={styles.nave_name_title}>Artbuy</h3>
        <p className={styles.nave_name_icon}><GiPencil/></p>
       </div>
       <div className={styles.cart_icon} onClick={()=>navigate("/cart")}><PiShoppingCartFill/> {cartitem.length}</div>
    </div>
    <div className={styles.nav_manu}>
      <div className={styles.store_icon} onClick={storehandle} >
        <FaStore/> Store
      </div>

     
      {
      login? 
      <div className={styles.profile_icon} onClick={profileHandle}>
       Account <RiAccountPinCircleLine />
      </div>
      :
      <div className={styles.account}>
        <div onClick={LoginHandle} className={styles.login} >Login</div>
        <div>/</div>
        <div onClick={SignupHandle} className={styles.signup}>Sign Up
        <MdOutlineAccountCircle onClick={SignupHandle}/>
        </div>
      </div>
      }

    </div>
  </div>
  )
}
