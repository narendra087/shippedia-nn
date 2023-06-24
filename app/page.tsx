'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'

import Input from './components/form/Input/Input';

import styles from './page.module.scss'

export default function Home() {
  const router = useRouter()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    router.push('/dashboard')
  }
  
  return (
    
    <main className={styles.main}>
      {/* <h1>Welcome to <span>Shippedia!</span></h1> */}
      <div className={styles.card}>
        <p className={styles['card-title']}>Welcome to</p>
        <h1>Shippedia!</h1>
        <div className={styles.form}>
          <Input
            id='username'
            label='Username'
            placeholder='Input username'
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <Input
            id='password'
            label='Password'
            placeholder='Input password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button className='primary' onClick={handleLogin}>Login</button>
        </div>
      </div>
    </main>
  )
}
