import React from 'react'
import styled from 'styled-components'
import Tarjetas from './Tarjetas'
import vista3 from '../Assets/foto.jpg'
import Porta from '../Assets/Portafolioimg.png'
import Turismo from '../Assets/turismo.png'
import { InnerLayout } from '../Styles/Layouts'
const Portafolio = () => {
    return (
        <InnerLayout>
        <PortafolioStyled>
        <div className='card'>
            <Tarjetas
            image={Porta}
            vistaso={'Echele un vistaso'}
            subtitle={'Portafolio'}
            paragraph={'Son mis portafolios para mi experiencia en programacion'}
            />
            <Tarjetas
            image={vista3}
            vista={'Echele un vistaso'}
            subtitle={'Pagina vista 3D'}
            paragraph={'Es una pagina de exhibicion de las figuras 3D'}
            />
            <Tarjetas
            image={Turismo}
            turismo={'Echele un vistaso'}
            subtitle={'Turismo Buga'}
            paragraph={'Una pagina de turismo Buga'}
            />
            
        </div>
        </PortafolioStyled>
        </InnerLayout>
    )
}
const PortafolioStyled = styled.section`
    .card{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1.5rem;
        font-family: 'Raleway', sans-serif;
        

        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:1500px){
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width:1230px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:855px){
            grid-template-columns: repeat(1, 1fr);
        }

        
    }
`;
export default Portafolio
