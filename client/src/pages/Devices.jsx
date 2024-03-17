import React, { useState } from 'react'
import styles from '../assets/styles/DevicesPage.module.scss'
import { Lots } from '../components';

function Devices() {

  const [activeSelect, setActiveSelect] = useState('all');

  const onActiveSelect = (e) =>{
    setActiveSelect(e.target.value);
  }

  return (
    <div className={styles.Devices}>
      <div className={styles.Devices__category}>

        <select 
          name="category"
          className={styles.Devices__category__select}
          value={activeSelect}
          onChange={(e) => onActiveSelect(e)}
        >

          <option 
            className={styles.Devices__category__select__option} 
            value="all"
          >
              All Devices
          </option>

          <option 
            className={styles.Devices__category__select__option} 
            value="vape_system"
          >
              Vape System
          </option>

          <option 
            className={styles.Devices__category__select__option} 
            value="pod_system"
          >
              Pod System
          </option>    

          <option 
            className={styles.Devices__category__select__option} 
            value="disposable_vape"
          >
              Disposable Vape
          </option>
        </select>
      </div>


      <div className={styles.Devices__container}>
        <Lots filter={activeSelect} type='devices' />
      </div>

    </div>
  )
}

export default Devices