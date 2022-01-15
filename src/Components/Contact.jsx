import React from 'react'
import styled from 'styled-components'
import {Icon }from '../Styles/Icons'

const Contact = () => {
    return (
        <ContactoStyled>
            <div className='container'>
                
                <div className='icono'>
                        <a href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target="_blank" rel="noreferrer" ><Icon className="fab fa-linkedin" /></a>
                        <a href='https://github.com/heynar-max' target="_blank" rel="noreferrer" ><Icon className="fab fa-github" /></a>
                        <a href='https://www.instagram.com/heynar_max/' target="_blank" rel="noreferrer"><Icon className="fab fa-instagram-square" /></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Icon className="fab fa-facebook-square" /></a>
                        </div>
                <div className='content'>
                    <h3>ESTOY BUSCANDO UN TRABAJO</h3>
                    <span>CONECTEMOS:: </span>
                </div>
                <div className='url'>
                    <a href="https://www.facebook.com/heynar.sotoholguin" target="_blank" rel="noreferrer"><p>https://www.facebook.com/heynar.sotoholguin</p></a>
                    <a href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target="_blank" rel="noreferrer"><p>https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/</p></a>
                    <a href="https://www.instagram.com/heynar_max/" target="_blank" rel="noreferrer"><p>https://www.instagram.com/heynar_max/</p></a>

                </div>

            </div>
        </ContactoStyled>
    )
}

const ContactoStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    .icono{
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        margin-bottom: 10rem;
            i{
                color: var(--color-naranja);
                width: 100px;
                height: 100px;
                line-height: 90px;
                text-align: center;
                border-radius: 50%;
                font-size: 50px;
                @media screen and (max-width:700px){
                    width: 70px;
                    height: 70px;
                    line-height: 60px;
                    font-size: 40px;
                }
                @media screen and (max-width:580px){
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 30px;
                }
                @media screen and (max-width:370px){
                    width: 35px;
                    height: 35px;
                    line-height: 30px;
                    font-size: 30px;
                }
        }
    }
    .content{
        margin-bottom: 5rem;
        width: 500px;
        height: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-left: 2px solid var(--color-letra-blanco);
        border-top: 2px solid var(--color-letra-blanco);
        border-bottom: 2px solid var(--color-letra-blanco);
        border-right: 2px solid var(--color-letra-blanco);
        @media screen and (max-width:700px){
            width: 400px;
            height: 180px;
            
        }
        @media screen and (max-width:580px){
            width: 360px;
            height: 120px;
            
        }
        @media screen and (max-width:440px){
            width: 260px;
            height: 100px;
            
        }
        @media screen and (max-width:370px){
            width: 240px;
            height: 90px;
            margin-left: 1rem;
        }
        h3{
            display: flex;
            justify-content: center;
            color: var(--color-naranja);
            font-size: 1.3rem;
            font-family: 'Open Sans', sans-serif;
            margin-left: 3rem;
            @media screen and (max-width:700px){
                font-size: 1rem;
                margin-left: 1.8rem;
            }
            @media screen and (max-width:580px){
                font-size: .8rem;
                margin-left: 1.4rem;
            }
            @media screen and (max-width:440px){
                font-size: .6rem;
                margin-left: 1rem;
            }
            
        }
        span{
            display: flex;
            justify-content: center;
            color: var(--color-letra-blanco);
            font-size: 1.3rem;
            font-family: 'Open Sans', sans-serif;
            margin-left: 3rem;
            @media screen and (max-width:700px){
                font-size: 1rem;
                margin-left: 1.8rem;
            }
            @media screen and (max-width:580px){
                font-size: .8rem;
                margin-left: 1.4rem;
            }
            @media screen and (max-width:440px){
                font-size: .6rem;
                margin-left: 1rem;
            }
        }
    }
    .url{
        margin-top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10rem;
        p{
            font-family: 'Open Sans', sans-serif;
            @media screen and (max-width:700px){
                font-size: .8rem;
                
            }
            @media screen and (max-width:580px){
                font-size: .8rem;
                
            }
            @media screen and (max-width:440px){
                font-size: .6rem;
                
            }
            @media screen and (max-width:370px){
                font-size: .4rem;
                
            }
        }
        a{
            color: var(--color-letra-blanco);
        }
    }
`;
export default Contact
