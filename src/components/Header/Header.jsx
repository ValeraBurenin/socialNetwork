import React from 'react'
import s from './Header.module.css'
import logo from '@/components/assets/img/logo.png'

export default function Header () {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
    </header>
  )
}
