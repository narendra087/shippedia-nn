import React from 'react'
import styles from './Error.module.scss'

interface ComponentProps {
  msg: string
}

const Error = ({msg}: ComponentProps) => {
  return (
    <p className={styles['text-error']}>{msg}</p>
  )
}

export default Error