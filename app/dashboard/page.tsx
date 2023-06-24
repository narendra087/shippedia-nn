"use client"

import React, { useEffect, useState } from 'react'

import Input from '../components/form/Input/Input'
import FormSelect from '../components/form/select/FormSelect'

import styles from './dashboard.module.scss'
import axios from 'axios'

interface OptionType {
  value: string
  label: string
}

interface CostType {
  value: number
  etd: string
  note: string
}

interface CostsType {
  cost: CostType[]
  description: string
  service: string
}

interface ResultType {
  code: string
  name: string
  costs: CostsType[]
}

const DashboardPage = () => {
  const [origin, setOrigin] = useState<OptionType | null>()
  const [destination, setDestination] = useState<OptionType | null>()
  const [weight, setWeight] = useState<number>()
  
  const [listCity, setListCity] = useState<OptionType[]>([])
  
  const [resultData, setResultData] = useState<ResultType[]>([])
  
  useEffect(() => {
    getCities()
  }, [])
  
  const getCities = async() => {
    try {
      const res = await axios.get('/api/city')
      const listData = res.data.rajaongkir.results
      const tempList:OptionType[] = []
      listData.map((ld:any) => {
        tempList.push({
          label: ld?.city_name + ` (${ld?.type})`,
          value: ld?.city_id
        })
      })
      
      setListCity(tempList)
    } catch (err:any) {
      console.log(err)
    }
  }
  
  const getShippingCost = async() => {
    try {
      const payload = {
        origin: origin?.value,
        destination: destination?.value,
        weight,
        courier: 'jne',
      }
      const res = await axios.post('/api/shipping', payload)
      
      setResultData(res.data.rajaongkir.results)
      
      console.log(res)
    } catch (err:any) {
      console.log(err)
    }
  }
  
  const handleChangeOrigin = (value:OptionType | null) => {
    setOrigin(value)
  }
  
  const handleChangeDestination = (value:OptionType | null) => {
    setDestination(value)
  }
  
  const isDisabled = () => {
    if (!origin || !destination || !weight) {
      return true
    }
    
    return false
  }
  
  const renderResult = () => {
    return (
      <div className={`${styles.container} ${styles.result}`}>
        <h2>Found <span>shipper!</span></h2>
        
        <div className={styles['shipper-wrapper']}>
          { resultData.map((rd, i) => (
            <div className={styles.shipper} key={i}>
              <p>Courier Name: <strong>{rd?.name || '-'}</strong></p>
              <div className={styles['shipper-list']}>
                {rd.costs.map((cst, j) => (
                  <div key={j} className={styles['shipper-card']}>
                    <strong className='service'>{cst.service}</strong>
                    <pre>({cst.description})</pre>
                    {cst.cost.map((data, k) => (
                      <div key={k}>
                        <p>Rp. {data.value} ({data.etd} days)</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <main className={styles.main}>
      
      <div className={styles.container}>
        <h2>Check your <span>shipping cost!</span></h2>
        <div className={styles['form-wrapper']}>
          <FormSelect options={listCity} onChange={handleChangeOrigin} />
          <FormSelect options={listCity} onChange={handleChangeDestination} />
          <Input
            id='weight'
            type='number'
            value={weight || undefined}
            placeholder='Input weight (gram)'
            onChange={(e) => setWeight(Number(e.target.value))}
            min={0}
          />
          <button className='primary' disabled={isDisabled()} onClick={getShippingCost}>Submit</button>
        </div>
      </div>
      
      { resultData.length && renderResult() }
    </main>
  )
}

export default DashboardPage