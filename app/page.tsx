import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to <span>Shippedia!</span></h1>
      <div className={styles.card}>
        <p className={styles['card-title']}>Login</p>
        <form>
          <div className={styles['form-group']}>
            <label htmlFor='username' >Username:</label>
            <input id='username' name='username' type="text" />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='password'>Password:</label>
            <input id='password' name='password' type="password" />
          </div>
          <button className='primary'>Login</button>
        </form>
      </div>
    </main>
  )
}
