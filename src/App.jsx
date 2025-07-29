import { useState } from 'react'
import CabecalhoSuperior from './Components/CabecalhoSuperior/index'
import Rodape from './Components/Rodape/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CabecalhoSuperior></CabecalhoSuperior>
      <Rodape></Rodape>
    </>
  )
}

export default App
