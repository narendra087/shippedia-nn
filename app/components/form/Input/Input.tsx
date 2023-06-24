import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import Error from '../error/Error'

import styles from './Input.module.scss'

interface ComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  status?: 'error' | 'warning' | 'success'
  errMsg?: string
}

const Input = ({
  id,
  label,
  onChange,
  status,
  errMsg,
  ...props
}: ComponentProps) => {
  return (
    <div className={styles['input-wrapper']}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        onChange={onChange}
        {...props}
      />
      {errMsg && (
        <Error msg={errMsg} />
      )}
    </div>
  )
}

export default Input