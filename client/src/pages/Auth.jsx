import React, { useState } from 'react'
import styles from '../assets/styles/Auth.module.scss'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/api';

function Auth() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorValue, setErrorValue] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authUser({ username, password });
      const { token, error } = response;
      if(token) {
        localStorage.setItem('token', token);
        console.log("Succses");
        navigate('/account');
      } else {
        throw new Error(error);
      }
    } catch (err) {
      setErrorValue(err.error);
      console.error('Error:', err);
    }
  }

  return (
    <div className={styles.Auth}>
      <div className={styles.Auth__form}>
        <h2 className={styles.Auth__form__title}>SING IN</h2>
        <form onSubmit={handleSubmit}>
        <div className={styles.Auth__form__inputContainer}> 
          <input 
            type="email" 
            className={styles.Auth__form__input} 
            placeholder='Email'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> 
        </div>
        <div className={styles.Auth__form__inputContainer}> 
          <input 
            type="password" 
            className={styles.Auth__form__input} 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /> 
          </div>
          <button 
            className={styles.Auth__form__btn}
            type='submit'  
          >
              Sing In
          </button>
          </form>
          
          <h3
            style={{
              fontSize: '17px',
              marginTop: '20px'
            }}
          >
            Haven't account? 
            
            <span
            style={{
              color: '#0056b3',
              fontSize: '18px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/registration')}
            >
              Sing Up
            </span>
          </h3>
          {errorValue && <p className={styles.Auth__form__error}>{errorValue}</p>}
      </div>
    </div>
  )
}

export default Auth