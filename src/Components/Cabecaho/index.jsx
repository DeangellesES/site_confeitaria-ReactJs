import styled from "styled-components"

import { FaSearch } from "react-icons/fa";
import { FaUser, FaCartShopping } from "react-icons/fa6";

import logo from "./assets/img/logo.png"

const CabecalhoPrincipal = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem 3rem;
`

const ParteBaixoParteUmImagem = styled.img`
    width: 14%
`
const CabecalhoPrincipalLogo = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
`
const CabecalhoPrincipalNavegacao = styled.div`
    font-size: 1.4rem;
    display: flex;
    gap: 1.5rem;
    font-weight: 600;
`

function Cabecalho () {
    return(
        <CabecalhoPrincipal>
            <CabecalhoPrincipalLogo>
                <ParteBaixoParteUmImagem src={logo} alt="" />
                <h1>Confeitaria</h1>
            </CabecalhoPrincipalLogo>
            <CabecalhoPrincipalNavegacao>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Páginas</a>
                <a href="">Portifólio</a>
                <a href="">Blog</a>
                <a href="">Loja</a>
                <a href="">Contato</a>

                <a href="">
                    <FaSearch />
                </a>
                <a href="">
                    <FaUser />
                </a>
                <a href="">
                    <FaCartShopping />
                </a>
            </CabecalhoPrincipalNavegacao>
        </CabecalhoPrincipal>
    )
}

export default Cabecalho