import React, { useState } from 'react'
import styles from '../assets/styles/LiquidsPage.module.scss'
import { Lots } from '../components';

function Liquids() {

  const [activeSelect, setActiveSelect] = useState('salt');

  const onActiveSelect = (e) =>{
    setActiveSelect(e.target.value);
  }

  return (
    <div className={styles.Liquids}>
      <div className={styles.Liquids__category}>

        <select 
          name="category"
          className={styles.Liquids__category__select}
          value={activeSelect}
          onChange={(e) => onActiveSelect(e)}
        >

          <option 
            className={styles.Liquids__category__select__option} 
            value="salt_nic"
          >
              Salt Nic
          </option>

          <option 
            className={styles.Liquids__category__select__option} 
            value="organic_nic"
          >
              Organic Nic
          </option>
        </select>
      </div>

      <div className={styles.Liquids__container}>
        <Lots filter={activeSelect} />
      </div>

    </div>
  )
}

export default Liquids