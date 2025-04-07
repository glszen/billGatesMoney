import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Money from './components/Money'
import Card from './components/Card'

function App() {

  const[totalMoney, setTotalMoney] = useState(100000000000);

  return (
   <div>
    <Header/>
    <Money totalMoney={totalMoney}/>
    <Card totalMoney={totalMoney} setTotalMoney={setTotalMoney}/>

   </div>
  )
}

export default App
