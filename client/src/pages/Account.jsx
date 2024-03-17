import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import { getOrderHistory, getProductByName } from '../services/api';
import styles from '../assets/styles/Account.module.scss';

function Account() {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');
  const [OrderHistory, setOrderHistory] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
    } else {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.data.username);
      setUserId(decodedToken.data.userid);
    }

    const fetchData = async () =>{
      try{
        const history = await getOrderHistory(userId);
        setOrderHistory(history.data);
      } catch(err){
        console.error(err);
      }
    }

    fetchData()
  }, [navigate, userId]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  const ddd = () =>{
    console.log(OrderHistory);
  }

  return (
    <div className={styles.Account}>
      <div className={styles.Account__container}>
        <div className={styles.Account__container__header}>
          <h2 className={styles.Account__container__header__title}>Welcome, {username}</h2>
          <button 
            className={styles.Account__container__header__logout}
            onClick={() => ddd()}
            >
              Logout
            </button>
          </div>
          <div className={styles.Account__container__history}>
            <h2 className={styles.Account__container__history__title}>Your order history</h2>
            {OrderHistory.data && OrderHistory.data.map((items, index) => {
              return(
                <div className={styles.Account__container__history__item} key={index}>
                  <h2>{items.product_name}</h2>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default Account;
