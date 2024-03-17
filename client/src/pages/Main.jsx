import React from 'react'
import styles from '../assets/styles/MainPage.module.scss'
import { SliderBox, Categories } from '../components/index';

function Main() {
  return (
    <div className={styles.main}>
      <SliderBox />
      <Categories />
    </div>
  )
}

export default Main