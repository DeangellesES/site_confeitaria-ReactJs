import styled from "styled-components"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const CabecalhoCima = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    align-items: center;
    border: 1px solid #000;
`
const CabecalhoCimaContato = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.2rem;
`
const CabecalhoCimaRedes = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.2rem;
`

function CabecalhoSuperior() {
    return (
        <CabecalhoCima>
            <CabecalhoCimaContato>
                <FaPhoneAlt className="icone_cabecalho" />
                <span>+111-222-333</span>
                <MdEmail className="icone_cabecalho" />
                <span>abc@gmail.com</span>
            </CabecalhoCimaContato>

            <CabecalhoCimaRedes>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
            </CabecalhoCimaRedes>
        </CabecalhoCima>
    )
}

export default CabecalhoSuperior