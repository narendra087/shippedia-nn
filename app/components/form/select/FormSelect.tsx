import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

import { useDebounce } from '@/app/hooks/useDebounce'

interface OptionType {
  value: string
  label: string
}

interface ComponentProps {
  options: OptionType[]
  onChange: (value: OptionType | null) => void
}

const FormSelect = ({options, onChange}: ComponentProps) => {
  const [listOption, setListOption] = useState<OptionType[]>([])
  const [keyword, setKeyword] = useState('')
  
  useEffect(() => {
    if (!keyword) {
      setListOption([])
    } else {
      searchOption()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])
  
  
  const searchOption = () => {
    const tempOption = [...options].filter((opt) => opt.label.toUpperCase().indexOf(keyword.toUpperCase()) > -1)
    setListOption(tempOption)
  }
  
  return (
    <Select
      options={listOption}
      isSearchable
      onInputChange={(e) => setKeyword(e)}
      onChange={(e) => onChange(e)}
    />
  )
}

export default FormSelect