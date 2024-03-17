import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './categories.module.scss'
import vapes from '../../assets/images/vape-category.jpg'
import eliquids from '../../assets/images/eliquids.jpg'
import accessoris from '../../assets/images/accessories.jpg'
import discount from '../../assets/images/discount-img.jpg'

export const Categories = () => {

  const navigate = useNavigate();

  const onSelectCategory = (index) => {
    const routes = ['/devices', '/liquids', '/accessories', '/discounts'];
    navigate(routes[index]);
}

  return (
    <div className={styles.Categories}>
      <h1 className={styles.Categories__title}>Categories</h1>
      <div className={styles.Categories__block}>
        <div className={styles.Categories__block__category}>

          <img 
            className={styles.Categories__block__category__images} 
            src={vapes} 
            alt="DEVICES" 
          />

          <h2 className={styles.Categories__block__category__title}>DEVICES</h2>
          <h3 className={styles.Categories__block__category__subtitle}>Many vapes, pod-systems, smoke-systems are waiting for you</h3>
          
          <button 
            className={styles.Categories__block__category__btn}
            onClick={() => onSelectCategory(0)}
            >
              SHOW LOTS
          </button>

        </div>
        <div className={styles.Categories__block__category}>

          <img
            className={styles.Categories__block__category__images} 
            src={eliquids} 
            alt="ELIQUIDS" 
          />

          <h2 className={styles.Categories__block__category__title}>ELIQUIDS</h2>
          <h3 className={styles.Categories__block__category__subtitle}>Eliquids with many flavors, different strengths and volumes</h3>
         
          <button 
            className={styles.Categories__block__category__btn}
            onClick={() => onSelectCategory(1)}
            >
              SHOW LOTS
          </button>

        </div>
      </div>
      <div className={styles.Categories__block}>
        <div className={styles.Categories__block__category}>

        <img 
          className={styles.Categories__block__category__images} 
          src={accessoris}
          alt="ACCESSORIS" 
        />

          <h2 className={styles.Categories__block__category__title}>ACCESSORIS</h2>
          <h3 className={styles.Categories__block__category__subtitle}>Accessoris for your deivces</h3>
          
          <button 
            className={styles.Categories__block__category__btn}
            onClick={() => onSelectCategory(2)}
            >
              SHOW LOTS
          </button>

        </div>
        <div className={styles.Categories__block__category}>

          <img
            style={{margin: '75px 0 65px 0'}}
            className={styles.Categories__block__category__images} 
            src={discount} 
            alt="DISCOUNTS" 
          />

          <h2 className={styles.Categories__block__category__title}>DISCOUNTS</h2>
          <h3 className={styles.Categories__block__category__subtitle}>Products that are currently discounted</h3>
          
          <button 
            className={styles.Categories__block__category__btn}
            onClick={() => onSelectCategory(3)}
            >
              SHOW LOTS
          </button>

        </div>
      </div>
    </div>
  )
}
