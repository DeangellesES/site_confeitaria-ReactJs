import styled from "styled-components"
import logo from "./assets/img/logo.png"
import PaesFundo from "./assets/img/mesacompaes.jpg"

import { MdEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMap } from "react-icons/fa";

const ParteBaixo = styled.footer`
    background: url(${PaesFundo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 70vh;
`
const ParteBaixoCaixa = styled.div`
    background: #00000091;
    display: flex;  
    gap: 2rem;
    justify-content: center;
    color: #fff;
    height: 70vh;
    flex-wrap: wrap;    
`

// CAIXA UM
const ParteBaixoCaixaUm = styled.div`
    width: 25%;
    padding-top: 1.5rem;
`
const ParteBaixoParteUmCima = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
`
const ParteBaixoParteUmImagem = styled.img`
    width: 15%
`

const ParteBaixoParteUmCimaParagrafo = styled.p`
    font-size: 1.3rem;
    padding: .7rem 0 1rem 0;
`
const ParteBaixoCaixaUmDentro = styled.div`
    display: flex;
    gap: .5rem;
`

// CAIXA DOIS
const ParteBaixoCaixaDois = styled.div`
    width: 18%;
    padding-top: 1.5rem;
`
const ParteBaixoCaixaDoisSublinhado = styled.div`
    width: 35%;
    border-bottom: 2px solid rgb(235, 29, 125);
    padding-top: .8rem;
`
const ParteBaixoCaixaDoisDentro = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7rem;
    margin-top: 1rem;
`
const ParteBaixoCaixaDoisDentroSetaLink = styled.div`
    display: flex;
    align-items: center;
`
const ParteBaixoCaixaDoisDentroLink = styled.a`
    color: #fff;
    font-size: 1.3rem;
`

// CAIXA TRES
const ParteBaixoCaixaTres = styled.div`
    width: 18%;
    padding-top: 1.5rem;
`
const ParteBaixoCaixaTresDentro = styled.div`

`

const ParteBaixoCaixaTresDentroParagrafo = styled.p`
    color: rgb(235, 29, 125);
    font-size: 1.2rem;
    padding: .7rem 0 .3rem 0;
`
const ParteBaixoCaixaTresSublinhado = styled.div`
    width: 35%;
    border-bottom: 2px solid rgb(235, 29, 125);
    padding-top: .8rem;
`

const ParteBaixoCaixaTresDentroSpan = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
`

// CAIXA QUATRO
const ParteBaixoCaixaQuatro = styled.div`
    width: 18%;
    padding-top: 1.5rem;
`
const ParteBaixoCaixaQuatroSublinhado = styled.div`
    width: 35%;
    border-bottom: 2px solid rgb(235, 29, 125);
    padding-top: .8rem;
`
const ParteBaixoCaixaQuatroSpan = styled.span`
    font-size: 1.2rem;
`
const ParteBaixoCaixaQuatroDentro = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
    margin: .4rem 0 0rem 0;
`

// CAIXA CINCO
const ParteBaixoParteUmCinco = styled.div`
    text-align: center;
    background: rgb(235, 29, 125);
    width: 100vw;
    padding: 2rem 0;
    font-size: 1.6rem;
`

function Rodape() {
    return (
        <ParteBaixo>
            <ParteBaixoCaixa>

                <ParteBaixoCaixaUm>
                    <ParteBaixoParteUmCima>
                        <ParteBaixoParteUmImagem src={logo} alt="" />
                        <h1>Confeiteria</h1>
                    </ParteBaixoParteUmCima>

                    <ParteBaixoParteUmCimaParagrafo>Desfrute da experiência de confeitaria do futuro! De criações personalizadas a delícias saborosas, redefinimos as possibilidades da doçura. Saboreando momentos hoje com excelência em confeitaria inovadora.</ParteBaixoParteUmCimaParagrafo>

                    <ParteBaixoCaixaUmDentro>
                        <a href=""><FaFacebookF className="icone_caixa__um" /></a>
                        <a href=""><FaTwitter className="icone_caixa__um" /></a>
                        <a href=""><FaInstagram className="icone_caixa__um" /></a>
                        <a href=""><FaLinkedin className="icone_caixa__um" /></a>

                    </ParteBaixoCaixaUmDentro>
                </ParteBaixoCaixaUm>

                <ParteBaixoCaixaDois>
                    <h1>Links Úteis</h1>
                    <ParteBaixoCaixaDoisSublinhado></ParteBaixoCaixaDoisSublinhado>
                    <ParteBaixoCaixaDoisDentro>
                        <ParteBaixoCaixaDoisDentroSetaLink>
                            <IoMdArrowDropright className="icone_caixa__dois" />
                            <ParteBaixoCaixaDoisDentroLink href="">Sobre</ParteBaixoCaixaDoisDentroLink>
                        </ParteBaixoCaixaDoisDentroSetaLink>
                        <ParteBaixoCaixaDoisDentroSetaLink>
                            <IoMdArrowDropright className="icone_caixa__dois" />
                            <ParteBaixoCaixaDoisDentroLink href="">Serviços</ParteBaixoCaixaDoisDentroLink>
                        </ParteBaixoCaixaDoisDentroSetaLink>
                        <ParteBaixoCaixaDoisDentroSetaLink>
                            <IoMdArrowDropright className="icone_caixa__dois" />
                            <ParteBaixoCaixaDoisDentroLink href="">Portifolio</ParteBaixoCaixaDoisDentroLink>
                        </ParteBaixoCaixaDoisDentroSetaLink>
                        <ParteBaixoCaixaDoisDentroSetaLink>
                            <IoMdArrowDropright className="icone_caixa__dois" />
                            <ParteBaixoCaixaDoisDentroLink href="">Blogs</ParteBaixoCaixaDoisDentroLink>
                        </ParteBaixoCaixaDoisDentroSetaLink>
                        <ParteBaixoCaixaDoisDentroSetaLink>
                            <IoMdArrowDropright className="icone_caixa__dois" />
                            <ParteBaixoCaixaDoisDentroLink href="">Shop</ParteBaixoCaixaDoisDentroLink>
                        </ParteBaixoCaixaDoisDentroSetaLink><ParteBaixoCaixaDoisDentroSetaLink>
                            <IoMdArrowDropright className="icone_caixa__dois" />
                            <ParteBaixoCaixaDoisDentroLink href="">Contato</ParteBaixoCaixaDoisDentroLink>
                        </ParteBaixoCaixaDoisDentroSetaLink>

                    </ParteBaixoCaixaDoisDentro>

                </ParteBaixoCaixaDois>

                <ParteBaixoCaixaTres>
                    <h1>Horário de Funcionamento</h1>
                    <ParteBaixoCaixaTresSublinhado></ParteBaixoCaixaTresSublinhado>
                    <ParteBaixoCaixaTresDentro>
                        <ParteBaixoCaixaTresDentroParagrafo>Segunda-feira - Sexta-feira</ParteBaixoCaixaTresDentroParagrafo>
                        <ParteBaixoCaixaTresDentroSpan>08:00 as 20:30</ParteBaixoCaixaTresDentroSpan>
                    </ParteBaixoCaixaTresDentro>

                    <ParteBaixoCaixaTresDentro>
                        <ParteBaixoCaixaTresDentroParagrafo>Sábado - Domingo</ParteBaixoCaixaTresDentroParagrafo>
                        <ParteBaixoCaixaTresDentroSpan>10:00 as 22:30</ParteBaixoCaixaTresDentroSpan>
                    </ParteBaixoCaixaTresDentro>
                </ParteBaixoCaixaTres>

                <ParteBaixoCaixaQuatro>
                    <h1>Informações de Contato</h1>
                    <ParteBaixoCaixaQuatroSublinhado></ParteBaixoCaixaQuatroSublinhado>
                    <ParteBaixoCaixaQuatroDentro>
                        <FaPhoneAlt className="icone_caixa__quatro"/>
                        <ParteBaixoCaixaQuatroSpan>+111-222-333</ParteBaixoCaixaQuatroSpan>
                    </ParteBaixoCaixaQuatroDentro>
                    <ParteBaixoCaixaQuatroDentro>
                        <FaPhoneAlt className="icone_caixa__quatro"/>
                        <ParteBaixoCaixaQuatroSpan>+123-456-789</ParteBaixoCaixaQuatroSpan>
                    </ParteBaixoCaixaQuatroDentro>
                    <ParteBaixoCaixaQuatroDentro>
                        <MdEmail className="icone_caixa__quatro"/>
                        <ParteBaixoCaixaQuatroSpan>abc@gmail.com</ParteBaixoCaixaQuatroSpan>
                    </ParteBaixoCaixaQuatroDentro>
                    <ParteBaixoCaixaQuatroDentro>
                        <MdEmail className="icone_caixa__quatro"/>
                        <ParteBaixoCaixaQuatroSpan>xyz@gmail.com</ParteBaixoCaixaQuatroSpan>
                    </ParteBaixoCaixaQuatroDentro>
                    <ParteBaixoCaixaQuatroDentro>
                        <FaMap className="icone_caixa__quatro"/>
                        <ParteBaixoCaixaQuatroSpan>karachi, pakistan</ParteBaixoCaixaQuatroSpan>
                    </ParteBaixoCaixaQuatroDentro>

                </ParteBaixoCaixaQuatro>

                <ParteBaixoParteUmCinco>
                    <p>Criado por Felipe | Todos os Direitos Reservados</p>
                </ParteBaixoParteUmCinco>
            </ParteBaixoCaixa>

        </ParteBaixo>
    )
}

export default Rodape