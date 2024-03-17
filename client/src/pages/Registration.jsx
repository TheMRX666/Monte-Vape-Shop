import React, { useState } from 'react'
import styles from '../assets/styles/register.module.scss'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api'

function Registration() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPasword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === rPassword && password.length > 7) {
      try{
        const response = await registerUser({username: email, password});
        console.log(response.data);
      } catch (err) {
        setError('An error occurred. Please try again');
        console.error('Error:', err);
      }
    } else{
      setError('Password not equal Repead Password, or so latter')
    }
  }

  const navigate = useNavigate();

  return (
    <div className={styles.Auth}>
      <div className={styles.Auth__form}>
        <h2 className={styles.Auth__form__title}>SING UP</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.Auth__form__inputContainer}> 
            <input 
              type="email" 
              className={styles.Auth__form__input} 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className={styles.Auth__form__inputContainer}> 
            <input 
              type="password" 
              className={styles.Auth__form__input} 
              placeholder='Repead Password'
              value={rPassword}
              onChange={(e) => setRPasword(e.target.value)}
              /> 
          </div>
            <button type="submit" className={styles.Auth__form__btn}>Sing Up</button>
        </form>
          <h3
            style={{
              fontSize: '17px',
              marginTop: '20px'
            }}
          >
            Have account? 
            
            <span
            style={{
              color: '#0056b3',
              fontSize: '18px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/auth')}
            >
              Sing In
            </span>
          </h3>
          {error && <p className={styles.Auth__form__error}>{error}</p>}
      </div>
    </div>
  )
}

export default Registration