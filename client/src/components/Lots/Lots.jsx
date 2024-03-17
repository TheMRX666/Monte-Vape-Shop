import React, { useEffect, useState } from 'react'
import styles from './lots.module.scss'
import { getProductsByCategory, getProductsByType } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export const Lots = ({ filter, type }) => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchData = async () => {
        try{
            if(filter != null && filter !== 'all'){
                const products = await getProductsByCategory(filter);
                setData(products.data);
            } else {
                const products = await getProductsByType(type);
                setData(products.data);
            }
        } catch (err){
            console.error(err);
        }
    };
    fetchData()
   }, [filter, type]);


    const choiseLot = (e) => {
        navigate('/item', {state: {variable: e}});
    }

  return (
    <div className={styles.Lots}>
        {data.data && data.data.map((product, index) => (
            <div 
                className={styles.Lots__block}
                key={index}
                style={{ width: `${88 / 4}%` }}
            >
                <div className={styles.Lots__block__lot}>
                    <img 
                     className={styles.Lots__block__lot__image}
                     src={product.img} 
                     alt={product.name}
                    />
                    
                    <h2
                     className={styles.Lots__block__lot__title}
                    >
                        {product.name}
                    </h2>

                    <div className={styles.Lots__block__lot__line}>
                        <h2 
                         className={styles.Lots__block__lot__line__price}
                        >
                            Price: {product.price}$
                        </h2>

                        <h2
                         className={styles.Lots__block__lot__line__quantity}
                        >
                            Quantity: {product.stock_quantity}
                        </h2>
                    </div>
                    
                    <button 
                     className={styles.Lots__block__lot__btn}
                     onClick={() => choiseLot(product.id)}
                    >
                        Details 
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}
