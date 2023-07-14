import { useState } from 'react'

import Card from './components/Card'
import CardDisplay from './components/CardDisplay'
import './App.css'

function App() {
  //const [text, setText] = useState(''valeurInitiale'')

  const [name, setName] = useState('Lana')

  function changeName(value){
    console.log('Biip', value)
  }

  return (
    <>
      <Card name={name} changeName={changeName} />
      <CardDisplay name={name} />
      <CardDisplay name={name}/>
      
    </>
  )
}

export default App
