import styled from "styled-components"

import { FaSearch } from "react-icons/fa";
import { FaUser, FaCartShopping } from "react-icons/fa6";

import logo from "./assets/img/logo.png"

const CabecalhoPrincipal = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem 3rem;
    position: fixed;
    margin-top: 3rem;
`

const ParteBaixoParteUmImagem = styled.img`
    width: 14%
`
const CabecalhoPrincipalLogo = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
`
const CabecalhoPrincipalLogoTitulo = styled.h1`
    color: #fff;
`
const CabecalhoPrincipalNavegacao = styled.div`
    font-size: 1.4rem;
    display: flex;
    gap: 1.5rem;
    font-weight: 600;
`

const CabecalhoPrincipalNavegacaoLink = styled.a`
    color: #fff;
`

function Cabecalho () {
    return(
        <CabecalhoPrincipal>
            <CabecalhoPrincipalLogo>
                <ParteBaixoParteUmImagem src={logo} alt="" />
                <CabecalhoPrincipalLogoTitulo>Confeitaria</CabecalhoPrincipalLogoTitulo>
            </CabecalhoPrincipalLogo>
            <CabecalhoPrincipalNavegacao>
                <CabecalhoPrincipalNavegacaoLink href="">Home</CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">Sobre</CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">Páginas</CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">Portifólio</CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">Blog</CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">Loja</CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">Contato</CabecalhoPrincipalNavegacaoLink>

                <CabecalhoPrincipalNavegacaoLink href="">
                    <FaSearch />
                </CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">
                    <FaUser />
                </CabecalhoPrincipalNavegacaoLink>
                <CabecalhoPrincipalNavegacaoLink href="">
                    <FaCartShopping />
                </CabecalhoPrincipalNavegacaoLink>
            </CabecalhoPrincipalNavegacao>
        </CabecalhoPrincipal>
    )
}

export default Cabecalho