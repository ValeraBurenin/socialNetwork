import React from 'react'
import s from './Preloader.module.css'
import preloader from '@/components/assets/img/831.gif'

export default function Preloader () {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt="fetch" />
    </div>
  )
}
