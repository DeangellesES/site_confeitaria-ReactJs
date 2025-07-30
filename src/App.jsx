import { useState } from 'react'
import AppRoutes from './routes';

import CabecalhoSuperior from './Components/CabecalhoSuperior/index'
import Rodape from './Components/Rodape/index'
import Cabecalho from './Components/Cabecaho'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes></AppRoutes>
      {/* <CabecalhoSuperior></CabecalhoSuperior>
      <Cabecalho></Cabecalho>
      <Rodape></Rodape> */}
    </>
  )
}

export default App
