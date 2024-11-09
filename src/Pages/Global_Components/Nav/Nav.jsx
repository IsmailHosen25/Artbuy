import styles from "./Nav.module.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { FaStore } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiPencil } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";
export default function Nav() {
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
 
  return (<div className={styles.nav}>
    <div className={styles.nav_desing}>
       <div className={styles.nave_name_desing}>
        <h3 className={styles.nave_name_title}>Artbuy</h3>
        <p className={styles.nave_name_icon}><GiPencil/></p>
       </div>
       <div className={styles.cart_icon}><PiShoppingCartFill/> {cartvalue}</div>
    </div>
    <div className={styles.nav_manu}>
      <div className={styles.store_icon} onClick={storehandle} >
        <FaStore/> Store
      </div>

     
      {
      login? 
      <div className={styles.profile_icon}>
       Account <ImProfile />
      </div>
      :
      <div className={styles.account}>
        <div onClick={LoginHandle} className={styles.login_signup} >Login</div>
        <div>/</div>
        <div onClick={SignupHandle} className={styles.login_signup}>Sign Up</div>
        <MdOutlineAccountCircle onClick={SignupHandle} className={styles.login_signup}/>
      </div>
      }

    </div>
  </div>
  )
}
