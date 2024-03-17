import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext';
import styles from './cart.module.scss'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const calcTotalPrice = () => {
        let total = 0;
        cartItems.forEach(e => {
            total += parseFloat(e.price);
        });
        return total.toFixed(2);
    }

    const orderName = () => {
        let name = "";
        cartItems.forEach(e => {
            name += ` <${e.name}>`;
        });
        return name;
    }

    if (!Array.isArray(cartItems)) {
        return <p>Cart is empty</p>;
      }

    const handleRemove = (index) =>{
        removeFromCart(index);
    }

    const completeOrder = () => {
        const totalPrice = calcTotalPrice();
        const orderNameValue = orderName();
        navigate('/placeorder', {state: {totalPrice: totalPrice, orderName: orderNameValue}});
    }

  return (
    <div className={styles.Cart}>
        <h2 className={styles.Cart__title}>Cart</h2>
        <ul className={styles.Cart__items}>
            {cartItems.map((item, index) => (
                <li
                    className={styles.Cart__items__item}
                    key={index}
                >
                    <img 
                        src={item.img} 
                        alt="/" 
                        style={{
                            width: '65px'
                        }}                        
                    />

                    <div
                        style={{
                            marginLeft: '15px',
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{
                                display: 'block'
                            }}
                        >
                            <h3 
                                className={styles.Cart__items__item__name}
                            >
                                {item.name}
                            </h3>
                            
                            <h3
                                className={styles.Cart__items__item__price}
                            >
                                Price: {item.price} $
                            </h3>
                        </div>

                        <button 
                            className={styles.Cart__items__item__btn}                    
                            onClick={() => handleRemove(index)}
                        >
                            X
                        </button>
                    </div>
                </li>
            ))}
        </ul>

        { !(calcTotalPrice() > 0) &&
        <div className={styles.Cart__order}>
            <h2 className={styles.Cart__order__totalprice}> Cart is empty </h2>  
        </div>
        } 

        { calcTotalPrice() > 0 && 
        <div className={styles.Cart__order}>
            <h2 className={styles.Cart__order__totalprice}> Total Price: {calcTotalPrice()} $</h2>  
                <button 
                    className={styles.Cart__order__createBtn}
                    onClick={completeOrder}    
                >
                        Create Order
                </button>
            
        </div> }
    </div>
  )
}
