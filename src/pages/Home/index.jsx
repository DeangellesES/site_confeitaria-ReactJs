import styled from "styled-components"

import CabecalhoSuperior from "../../Components/CabecalhoSuperior"
import Cabecalho from "../../Components/Cabecaho"
import Rodape from "../../Components/Rodape"

import balcao from "../Home/assets/img/balcao-confeitaria.jpg"

const SecaoTopo = styled.section`
    background: url(${balcao});
    height: 100vh;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    // margin-bottom: -10rem;
`

const SecaoTopoUm = styled.div`
    
    
`

function Home() {
    return (
        <>
            <Cabecalho></Cabecalho>
            {/* <CabecalhoSuperior></CabecalhoSuperior> */}
            
            <SecaoTopo>
                <SecaoTopoUm>
                    <span>Welcome</span>
                    <h1></h1>
                    <p></p>
                    <a href=""></a>
                </SecaoTopoUm>
                <div></div>
                <div></div>
            </SecaoTopo>
            <Rodape></Rodape>
        </>
    )
}

export default Home