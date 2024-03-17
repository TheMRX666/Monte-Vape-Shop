import React, { useState, useEffect, useContext } from 'react'
import styles from '../assets/styles/PlaceOnOreder.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import CartContext from '../contexts/CartContext';
import { createOrder } from '../services/api';


function PlaceAnOrder() {

    const { cartItems } = useContext(CartContext);
    const [userId, setUserId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [deliveryType, setDeliveryType] = useState('Courier');
    const [deliveryAddress, setDeliveryAddres] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Cart');
    const [errorValue, setErrorValue] = useState('');

    const location = useLocation();
    const orderName = location.state?.orderName;
    const totalPrice = location.state?.totalPrice;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await createOrder({
                userId: userId, product_name: orderName, first_name: firstName,
                last_name: lastName, phone_number: phoneNumber, delivery_type: deliveryType,
                payment_method: paymentMethod, delivery_address: deliveryAddress
            });
            const {message, error} = response;
            if(message){
                console.log(message);
                navigate('/')
            }
        } catch(err){
            console.error(err);
            setErrorValue(err.error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.data.userid);
        } else {
            setUserId(null);
        }
      }, []);


  return (
    <div className={styles.PlaceAnOrder}>
        <div className={styles.PlaceAnOrder__container}>
            <div className={styles.PlaceAnOrder__container__title}>Your order is almost ready</div>
            <ul className={styles.PlaceAnOrder__container__items}>
                {cartItems.map((item, index) => (
                    <li
                        className={styles.PlaceAnOrder__container__items__item}
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
                                marginLeft: '15px'
                            }}
                        >
                            <h3 
                                className={styles.PlaceAnOrder__container__items__item__name}
                            >
                                {item.name}
                            </h3>
                            
                            <h3
                                className={styles.PlaceAnOrder__container__items__item__price}
                            >
                                Price: {item.price} $
                            </h3>
                        </div>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className={styles.PlaceAnOrder__container__inputContainer}> 
                <input 
                    type="text" 
                    className={styles.PlaceAnOrder__container__input} 
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                /> 
                </div>

                <div className={styles.PlaceAnOrder__container__inputContainer}> 
                <input 
                    type="text" 
                    className={styles.PlaceAnOrder__container__input} 
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                /> 
                </div>

                <div className={styles.PlaceAnOrder__container__inputContainer}> 
                <input 
                    type="tel" 
                    className={styles.PlaceAnOrder__container__input} 
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                /> 
                </div>

                <select 
                    className={styles.PlaceAnOrder__container__select}
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value)}
                >

                    <option
                        className={styles.PlaceAnOrder__container__select__option} 
                        value="Post office"
                    >
                        Post office
                    </option>

                    <option 
                        className={styles.PlaceAnOrder__container__select__option} 
                        value="Courier"
                    >
                        Courier
                    </option>

                </select>

                <div className={styles.PlaceAnOrder__container__inputContainer}> 
                <input 
                    type="text" 
                    className={styles.PlaceAnOrder__container__input} 
                    placeholder='Delivery Address'
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddres(e.target.value)}
                /> 
                </div>

                <select 
                    className={styles.PlaceAnOrder__container__select}
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >

                    <option 
                        className={styles.PlaceAnOrder__container__select__option} 
                        value="Cart"
                    >
                        Cart
                    </option>

                    <option 
                        className={styles.PlaceAnOrder__container__select__option} 
                        value="Cash"
                    >
                        Cash
                    </option>

                </select>
                <div className={styles.PlaceAnOrder__container__compleate}>
                    <h2 
                        className={styles.PlaceAnOrder__container__compleate__total}
                    >
                        Total Price: {totalPrice}
                    </h2>
                    
                    <button 
                        className={styles.PlaceAnOrder__container__compleate__btn}
                        type='submit'  
                    >
                        Checkout
                    </button>
                </div>
          </form>
          {errorValue && 
            <h2>{errorValue}</h2>
          }
        </div>
    </div>
  )
}

export default PlaceAnOrder