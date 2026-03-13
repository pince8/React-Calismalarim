import { useState } from 'react'

import './App.css'

function App() {
  const [firstName, setFirstName] = useState('Enes');
  const [lastName, setLastName] = useState("Bayram")
  const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"])
  const [userInfo, setUserInfo] = useState({ username: "ebayram", password: "1212" })
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    if (!0 <= count)
      setCount(count - 1)
  }
  // console.log(names)
  // const handleChange = () => {
  //   setFirstName("Beyza")
  // }

  {
    names.map((name, index) => (
      <div key={index}>{name}</div>
    ))
  }

  return (
    <div>
      {/* {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))} */}

      {/* {userInfo.username} {userInfo.password} */}

      {count}
      <div><button onClick={arttir}>Arttir</button></div>
      <div><button onClick={azalt}>Azalt</button></div>

      {/* {show ? <div>{userInfo.username} {userInfo.password}</div> : <div>bilgileri gösterme</div>} */}

      {/* {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))} */}

      {/* <div>{firstName}</div> */}
      {/* <div><button onClick={() => { setFirstName("Ayşenur") }}>İsmi Değiştir</button></div> */}
      {/* <div><button onClick={handleChange}>İsmi Değiştir</button></div> */}
    </div>
  )
}

export default App
