import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const productName = "Buzdolabı";

  return (
    <div>
      { /*component içinde component çağırdık*/}
      <Container>
        <Product productName="Çamaşır makinesi" price={4500} />
        {/* <hr />
        <Product productName={productName} price={5600} /> */}
        <Product productName="makine" price={4567} />
      </Container>
    </div>
  )
}

export default App
