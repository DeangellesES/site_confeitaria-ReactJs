import styled from "styled-components"

import balcao from "../Home/assets/img/balcao-confeitaria.jpg"

const SecaoTopo = styled.section``

const SecaoTopoUm = styled.div`
    background: url(${balcao});
`

function Home () {
    return(
        <main>
            <SecaoTopo>
                <SecaoTopoUm></SecaoTopoUm>
                <div></div>
                <div></div>
            </SecaoTopo>
        </main>
    )
}

export default Home