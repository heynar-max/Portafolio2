import React from 'react'
import styled from 'styled-components'

const Tarjetas = ({title, subtitle, paragraph, image, vistaso, vista, turismo}) => {
    return (
        <>
        <TarjetaStyled>
            <div className='container'>
                <img src = {image} alt=''/>
                <a href='https://portafolioheynar.netlify.app/' target="_blank" rel="noreferrer" >{vistaso}</a>
                <a href='https://portafolioheynar.netlify.app/' target="_blank" rel="noreferrer" >{vista}</a>
                <a href='https://turismobuga.netlify.app/' target="_blank" rel="noreferrer" >{turismo}</a>
                <h4>{title}</h4>
                <p>{paragraph}</p>
                <h6>{subtitle}</h6>
            </div>
        </TarjetaStyled>
        </>
    )
}

const TarjetaStyled = styled.div`
    background-color: var(--color-fondo-tarjeta);
    transition: all .4s ease-in-out;
    box-shadow: 0 8px 14px rgb(208 211 212 / 9%);
    border-radius: 10px;
    &:hover{
        transform: translateY(3px);
        
                
    }
    
    .container{
        padding: 0.2rem;
        a{
            color: var(--color-letra-blanco);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            font-family: 'Oswald', sans-serif;
            font-weight: 400;
            transition: all .4s ease-in-out;
            &:hover{
                color: var(--color-naranja);
                transform: translateY(3px);
            }

            &::after{
                content: "";
                background-color: var(--blanco-trasparente);
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        h6{
                font-size: 1.2rem;
                font-weight: 400;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
            }
            p{
                        font-size: 1.1rem;
                        font-family: 'Oswald', sans-serif;
                        font-weight: 100;
                        text-transform: capitalize;
                        color: #bdbcbd;
                    }
        img {
            width: 100%;
            border-radius: 10px;
            &:hover{
                
                filter: opacity(.9);

            }
            
        }
        p{
            padding: .8rem 0;
        }
        
    }
`;

export default Tarjetas
