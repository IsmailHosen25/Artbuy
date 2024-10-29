import styles from "./Nav.module.css"
import React, { useState } from 'react'
import { ImProfile } from "react-icons/im";
import { FaStore } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiPencil } from "react-icons/gi";
import { PiShoppingCartFill } from "react-icons/pi";
export default function Nav() {
  const [login,setlogin]=useState(false)
  const [cartvalue,setcartvalue]=useState(0)
  return (<div className={styles.nav}>
    <div className={styles.nav_desing}>
       <div className={styles.nave_name_desing}>
        <h3 className={styles.nave_name_title}>Artbuy</h3>
        <p className={styles.nave_name_icon}><GiPencil/></p>
       </div>
       <div className={styles.cart_icon}><PiShoppingCartFill/> {cartvalue}</div>
    </div>
    <div className={styles.nav_manu}>
      <div className={styles.store_icon}>
        <FaStore/> Store
      </div>

     
      {
      login? 
      <div className={styles.profile_icon}>
       Account <ImProfile />
      </div>
      :
      <div className={styles.account}>
        <div>Login</div>
        <div>/</div>
        <div>Sign Up</div>
        <MdOutlineAccountCircle/>
      </div>
      }

    </div>
  </div>
  )
}
