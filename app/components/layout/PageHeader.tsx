'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './PageHeader.module.scss'

const PageHeader = () => {
  const router = useRouter()
  
  const handleLogout = () => {
    router.push('/')
  }
  
  return (
    <div className={styles.header}>
      <p>Shippedia</p>
      <button className='secondary' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default PageHeader