import React from 'react'
import Avatar from '../Assets/heynar.jpg'
import styled from 'styled-components'
import { Icon } from '../Styles/Icons'
import Education from './Education'
import Separador from '../Styles/Separador'
import Habilidades from './Skill'

const SobreMi = () => {
    return (
        <>
            <ImagenStyled>
            
            <figure className='about__avatar'>
                <img src={Avatar} alt=''/>
            </figure>

            
            
                <div className='about__container'>
                <div className='about__content'>
                    <div className='h3'>datos personales</div>
                    
                    <div className="about__info">
                        <ul className="about__title">
                        <li><Icon className='fa fa-user'></Icon> <span> Name: </span><b>Heynar Soto Holguin</b></li>
                        <li><Icon className='fa fa-birthday-cake'></Icon> <span> Birthdate: </span><b>June 1983</b></li>
                        <li><Icon className='fa fa-flag'></Icon> <span> Nationality: </span><b>Colombian</b></li>
                        
                        
                        </ul>
                    
                    <ul className="about__infor">
                    <li><Icon className='fa fa-map-marker'></Icon> <span> Address: </span><b>Buga, Colombia</b></li>
                        <li><Icon className='fa fa-language'></Icon> <span> Langages: </span><b>Spanish</b></li>
                        <li><Icon className='fas fa-biking'></Icon> <span> Hobby: </span><b>Mountain biking</b></li>
                        
                    </ul>
                    </div>
                </div>
            </div>

            
            
            </ImagenStyled>
            <Separador/>
            <Education/>
            <Separador/>
            <Habilidades/>
        </>
    )
}


const ImagenStyled = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: center;


        @media screen and (max-width:1250px){
        flex-direction: column;
        .about__avatar{
            display: flex;
            justify-content: center;    
            }
        
            
        }


    .about__avatar{
        
        img{
        width:100%;
        border: 7px solid rgba(255, 255, 255, .15);
        border-bottom: 7px solid #fdb404;
        &::before{
        
            -webkit-animation: shine .85s;
            animation: shine .85s; 
            
        }

        @media screen and (max-width: 1250px){
            max-width: 400px;
        }
        
        @media screen and (max-width: 780px){
                font-size: 4rem;
                max-width: 300px;
            }

            @media screen and (max-width: 430px){
                font-size: 4rem;
                max-width: 300px;
            }
            @media screen and (max-width: 374px){
                font-size: 4rem;
                max-width: 200px;
            }
        

            @media screen and (max-width: 290px){
                
                font-size: 4rem;
                max-width: 100px;
            }

        
        
        }
    }
    
    .about__container{
        width: 50%;
        margin-left:2%;
        z-index:-1;
        @media screen and (max-width: 1250px){
            width: 100%;
                }
        .about__content{
            width: 100%;
            margin-left:1%;
            @media screen and (max-width: 1250px){
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-content: center;
            flex-wrap: wrap;
            align-items: center;

            
            }

            .h3{
                font-size: 1.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                @media screen and (max-width: 1250px){
                    font-size: 2rem;
                }
                @media screen and (max-width: 290px){
                                font-size: 1.5rem;
                            }
                
            }
            .about__info{
            display: flex;
            padding-bottom: 1.4rem;
            position: relative;
            color: #fff;
            font-size: 20px;
            
            @media screen and (max-width: 780px){
                flex-direction: column;
            }
            
            
                .about__title{
                    padding-right: 5rem;
                    
                    li{
                        color: var(--color-fondo);
                        margin-top: 6%;
                        list-style: none;
                        i{
                            color: #fff;
                            display: inline-block;
                            width: 35px;
                            height: 35px;
                            line-height: 35px;
                            text-align: center;
                            border-radius: 50%;
                            margin-right: 5px;
                            background: #fdb404;
                            font-size: 15px;
                        }
                        
                        b{
                            color: var(--color-letra-blanco);
                            font-family: 'Open Sans', sans-serif;
                            font-weight: 600;
                            font-size: 1.1rem;
                            @media screen and (max-width: 1487px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 886px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 390px){
                                font-size: .8rem;
                            }
                            
                            }
                        }
                    }
                    span{
                        font-family: 'Oswald', sans-serif;
                        color: #eee;
                        font-weight: 100;
                        text-transform: capitalize;
                        @media screen and (max-width: 1487px){
                                font-size: 1.1rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 886px){
                                font-size: 1.5rem;
                            }
                            
                            @media screen and (max-width: 390px){
                                font-size: 1rem;
                            }
                    }
                }
                .about__infor{
                    padding-right: 3rem;
                    li{
                        font-weight: 600;
                        color: var(--color-fondo);
                        margin-top: 6%;
                    
                        i{
                            color: #fff;
                            display: inline-block;
                            width: 35px;
                            height: 35px;
                            line-height: 35px;
                            text-align: center;
                            border-radius: 50%;
                            margin-right: 5px;
                            background: #fdb404;
                            font-size: 15px;

                        }
                        b{
                            color: var(--color-letra-blanco);
                            font-family: 'Open Sans', sans-serif;
                            font-weight: 600;
                            font-size: 1.1rem;
                            @media screen and (max-width: 1487px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 886px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 390px){
                                font-size: .8rem;
                            }
                        }
                    }
                    span{
                        font-family: 'Oswald', sans-serif;
                        color: #eee;
                        font-weight: 100;
                        text-transform: capitalize;
                        @media screen and (max-width: 1487px){
                                font-size: 1rem;
                            }
                            @media screen and (max-width: 1250px){
                                font-size: 1.2rem;
                            }
                            @media screen and (max-width: 886px){
                                font-size: 1.5rem;
                            }
                            
                            @media screen and (max-width: 390px){
                                font-size: 1rem;
                            }
                    }
                }
            }
            
        }
    

    
`; 


export default SobreMi
