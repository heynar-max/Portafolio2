import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle'
import Avatar from '../Assets/heynar.jpg'
import { HomeLayout } from '../Styles/Layouts'


const Home = () => {
    return (
        <>
            <Particle/>
            <HomeLayout>
            <ImagenStyled>
            
            <figure className='home__avatar'>
                <img src={Avatar} alt=''/>
            </figure>

            
            <div className='home__text'>
                <h1>Hola Soy</h1><h1><span> Heynar Soto Holguin</span></h1>
                <p >
                Desarrollador junior front-end de Buga, Colombia. Me gusta dibujar diseños en 3D, <br/> 
                también me encanta la lógica y la estructura de la codificación y siempre me esfuerzo  <br/> 
                por escribir código elegante y eficiente, ya sea html o css. <br/>
                cuando no estoy codificando o empujando píxeles me encontrarás <br/>
                en la montaña con mi bicicleta
                </p> 
            
            </div>
            
            </ImagenStyled>
            </HomeLayout>
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
        @media screen and (max-width:800px){
        flex-direction: column;
        margin-top: 0rem;
    }


    .home__avatar{
        
        img{
        border-radius: 50%;
        z-index: 1;
        border: 10px solid rgba(255, 255, 255, .15);
        border-bottom: 10px solid #fdb404;
        @media screen and (max-width: 790px){
                font-size: 4rem;
                max-width: 200px;
            }
        }
    }
    
        .home__text{
            margin-top: 3rem;
            h1{
                font-size: 2.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                @media screen and (max-width: 790px){
                font-size: 2rem;
                }
                
                
                span{
                    font-size: 3.5rem;
                    text-transform: uppercase;
                    color: var(--color-naranja);
                    font-family: 'Oswald', sans-serif;
                    @media screen and (max-width: 790px){
                    font-size: 2rem;
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
                font-size: 1.1rem;
                
        }
    }
`;
export default Home
