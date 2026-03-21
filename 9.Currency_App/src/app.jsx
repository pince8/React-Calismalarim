import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './app.css'
import Currency from './components/Currency'

export function App() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Currency />
    </div>
  )
}
