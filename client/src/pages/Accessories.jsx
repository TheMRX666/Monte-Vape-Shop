import React, { useState } from 'react'
import styles from '../assets/styles/AccessoriesPage.module.scss'
import { Lots } from '../components';

function Accessories() {
 
  const [activeSelect, setActiveSelect] = useState('catridges');

  const onActiveSelect = (e) =>{
    setActiveSelect(e.target.value);
  }

  return (
    <div className={styles.Accessories}>
      <div className={styles.Accessories__category}>

        <select 
          name="category"
          className={styles.Accessories__category__select}
          value={activeSelect}
          onChange={(e) => onActiveSelect(e)}
        >

          <option 
            className={styles.Accessories__category__select__option} 
            value="catridges"
          >
              Catridges
          </option>

          <option 
            className={styles.Accessories__category__select__option} 
            value="batterys"
          >
              Batterys
          </option>

          <option 
            className={styles.Accessories__category__select__option} 
            value="drip_types"
          >
              Drip Types
          </option>

          <option 
            className={styles.Accessories__category__select__option} 
            value="vaporizers"
          >
              Vaporizers
          </option>

          <option 
            className={styles.Accessories__category__select__option} 
            value="coils"
          >
              Coils
          </option>
        </select>
      </div>


      <div className={styles.Accessories__container}>
        <Lots filter={activeSelect}/>
      </div>

    </div>
  )
}

export default Accessories