import React, { useEffect, useState, useContext } from 'react';
import styles from '../assets/styles/SelectItemPage.module.scss';
import { useLocation } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import { getProductById } from '../services/api';

export default function SelectItemPage() {

    const location = useLocation();
    const variable = location.state?.variable;

    const { addToCart } = useContext(CartContext);

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const products = await getProductById(variable);
                setData(products.data);
            } catch (err){
                console.error(err);
            }
        };
        fetchData()
       }, [variable]);

       
    const handleAddToCart = () => {
        addToCart({
            id: data?.data?.id,
            name: data?.data?.name,
            img: data?.data?.img,
            price: data?.data?.price,
        });
    }

  return (
    <div className={styles.SelectItemPage}>
        <div className={styles.SelectItemPage__container}>
            <img
                className={styles.SelectItemPage__container__img} 
                src={data?.data?.img} 
                alt={data?.data?.name}
            />

            <div className={styles.SelectItemPage__container__right}>
                <h2 
                    className={styles.SelectItemPage__container__right__title}
                >
                    {data?.data?.name}
                </h2>
                
                <h3 
                    className={styles.SelectItemPage__container__right__subtitle}
                >
                    {data?.data?.description}
                </h3>

                <h3 
                    className={styles.SelectItemPage__container__right__price}
                >
                    Price: {data?.data?.price} $
                </h3>

                <h3
                    className={styles.SelectItemPage__container__right__quantity}
                >
                    Stock Quantity: {data?.data?.stock_quantity}
                </h3>

                <button
                    className={styles.SelectItemPage__container__right__btn}
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  )
}
