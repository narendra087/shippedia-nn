import React, { FormEvent, HTMLInputTypeAttribute } from 'react'
import Error from '../error/Error'

import styles from './Input.module.scss'

interface ComponentProps {
  id: string
  value: string
  placeholder: string
  type: HTMLInputTypeAttribute
  label?: string
  name?: string
  disabled?: boolean
  readOnly?: boolean
  onChange?: (e: FormEvent<HTMLInputElement>) => void
  status?: 'error' | 'warning' | 'success'
  errMsg?: string
}

const Input = ({
  id,
  value,
  placeholder,
  name,
  label,
  type = 'text',
  disabled,
  readOnly,
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
        value={value}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        {...props}
      />
      {errMsg && (
        <Error msg={errMsg} />
      )}
    </div>
  )
}

export default Input