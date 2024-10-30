import Nav from "../Global_Components/Nav/Nav"
import ProductsCard from "../Global_Components/ProductsCard/ProductsCard"
import styles from "./Home.module.css"
import React from 'react'
export default function Home() {
  return (
    <div className={styles.hello}>
      <Nav/>
      <ProductsCard />
    </div>
  )
}
