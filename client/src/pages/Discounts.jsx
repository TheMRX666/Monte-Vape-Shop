import React from 'react'
import styles from '../assets/styles/DiscountsPage.module.scss'
import { Lots } from '../components/'

export default function Discounts() {
  return (
    <div className={styles.Discounts}>
      <h1 className={styles.Discounts__title}>Discounts Products</h1>

      <Lots filter='discounts'/>
    </div>
  )
}
