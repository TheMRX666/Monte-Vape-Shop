import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./header.module.scss"
import { Cart } from '../Cart/Cart';
import { isAuthenticated } from '../../services/isAuthenticated';
import cartImg from '../../assets/images/cart-50.png';
import accountImg from '../../assets/images/account-50.png'


export const Header = ({ items }) => {

    const [trigger, setTrigger] = useState(false);
    const navigate = useNavigate();

    const cart = () => {
        setTrigger(!trigger);
    }

    const onSelectPage = (index) => {
        const routes = ['/devices', '/liquids', '/accessories', '/discounts', '/about-page'];
        navigate(routes[index]);
    }

    return(
        <div className={styles.header}>
            <div className={styles.header__nav}>
                <h2 
                    className={styles.header__nav__logo}
                    onClick={ () => navigate('/') }>
                        MONTE <br/><span className={styles.header__nav__logo_span}>VAPE SHOP</span>
                </h2>

                {items && items.map((name, index) => (
                    <h2 
                        className={styles.header__nav__pages}
                        onClick={ () => onSelectPage(index) }
                        key={`${name}_${index}`}>
                            {name}
                    </h2>
                ))}

            </div>


            <div className={styles.header__auth}>
                <img
                    onClick={() => cart()} 
                    src={cartImg}
                    alt='cartImg'
                    style={{
                        width: '35px'
                    }}    
                />

                <img
                    onClick={ () => navigate(isAuthenticated() ? '/account' : '/auth') } 
                    src={accountImg}
                    alt='account'
                    styles={{
                        width: '35px'   
                    }}
                />
            </div>

            {trigger && <div 
                className={styles.header__cart}
                style={{
                    padding: `25px 10px 20px 10px`,
                }}
            >
                <Cart />
            </div>}

        </div>
    );
}