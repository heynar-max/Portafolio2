import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle'
import Avatar from '../Assets/heynar.jpg'


const Home = () => {
    return (
        <>
            <Particle/>
            
            <ImagenStyled>
            
            <div className='left-content'>
                <img src={Avatar} alt=''/>
            </div>

            
            <div className='right-content'>
                <h1>Hola Soy</h1><h1><span> Heynar Soto Holguin</span></h1>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> 
                    Atque nihil voluptates ea dolore vel <br/>
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
                </p> 
            
            </div>
            
            </ImagenStyled>
        </>
    )
}

const ImagenStyled = styled.div`
    display: flex;
    margin-top: 10rem;
    text-align: center;
    flex-direction: row;
    justify-content: center;


        @media screen and (max-width:1000px){
        flex-direction: column;
        margin-top: 4rem;
    }


    .left-content{
        
        img{
        border-radius: 50%;
        z-index: 1;
        border: 10px solid rgba(255, 255, 255, .15);
        border-bottom: 10px solid #fdb404;
        @media screen and (max-width: 790px){
                font-size: 4rem;
                max-width: 200px;
            }

            @media screen and (max-width: 430px){
                font-size: 4rem;
                max-width: 100px;
            }
        

            @media screen and (max-width: 290px){
                
                display:none;
            }
        
        }
    }
    
        .right-content{
            margin-top: 3rem;
            h1{
                font-size: 2.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                @media screen and (max-width: 790px){
                font-size: 1.8rem;
                }
                @media screen and (max-width: 430px){
                font-size: 1.5rem;
                }
                @media screen and (max-width: 290px){
                font-size: 1rem;
                }
                
                span{
                    font-size: 3.5rem;
                    text-transform: uppercase;
                    color: var(--color-naranja);
                    font-family: 'Oswald', sans-serif;
                    @media screen and (max-width: 790px){
                    font-size: 1.8rem;
                    }
                    @media screen and (max-width: 430px){
                    font-size: 1.5rem;
                    }
                    @media screen and (max-width: 290px){
                    font-size: 1rem;
                    }
                
                
            }
            }
            
        }
        p{
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                padding: 1rem 0;
                font-size: 1.2rem;
                @media screen and (max-width: 790px){
                font-size: 1.2rem;
                }
                @media screen and (max-width: 430px){
                    font-size: 1rem;
                }
                @media screen and (max-width: 290px){
                font-size: .8rem;
                
            }
        }
`;
export default Home
