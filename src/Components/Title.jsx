import React from 'react'
import styled from 'styled-components'

const Title = ({title, title1, span}) => {
    return (
        <TitleStyled>
            <h2>{title}&nbsp;<p>{title1}</p><span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div` 
        position: relative;
        /* top: 5vh; */
        z-index: -1;
        

    h2{
        color: var(--color-letra-blanco);
        font-size: 4rem;
        font-weight: 600;
        position: relative;
        text-transform: uppercase;
        padding-bottom: .7rem;
        justify-content: center;
        display: flex;
        font-family: 'Oswald', sans-serif;

        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }

        p{
            color: var(--color-naranja);
        font-size: 4rem;
        font-weight: 600;
        position: relative;
        text-transform: uppercase;
        padding-bottom: .7rem;
        justify-content: center;
        display: flex;
        font-family: 'Oswald', sans-serif;

        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
        }
        
        span{
            font-weight: 900;
            color: #b4b3b029;
            font-size: 8rem;
            position: absolute;
            top: -40%;
            
            
            @media screen and (max-width: 620px){
                font-size: 8rem;
                top: -40%;
                
            }
            @media screen and (max-width: 496px){
                font-size: 5rem;
                
            }
            @media screen and (max-width: 370px){
                font-size: 4.1rem;
            }
        }
    }
`;

export default Title
