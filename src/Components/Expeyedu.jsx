import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Styles/Icons'
import Expeyeduitem from './Expeyeduitem'

const Expeyedu = () => {
    return (
        <ExpeyeduStiled>
            

            <div className='container'>
            <div className='h3'>Experiencia & Educación</div>
                <div className='right-content'>
                <div className='caja'>
                    <Icon className='fa fa-graduation-cap'></Icon>
                    <Expeyeduitem 
                        title={'fundamentos de programación python '}
                        year={'2021'}
                        subtitle={'Universidad Tecnologica de pereira'}
                        text={'Se realizo del 28 de abril al 16 de junio con una intensidad de 12 horas semanalaes de clases sincrónicas y 120 horas que son de trabajo autónomo y asincróno'}
                    />
                    <Icon className='fa fa-graduation-cap'></Icon>
                    <Expeyeduitem 
                        title={'Diplomado de Desarrollo de Aplicaciones Web'}
                        year={'2021'}
                        subtitle={'Universidad Tecnologica de pereira'}
                        text={'Curso y aprobó el Diplomado en Desarrollo de Aplicaiones web de Mision TIC 2022, con una intensidad horaria de 800 horas, comprendidas en 320 horas sincrónicas y 480 asincrónicas'}
                    />
                    
                    </div>
                    
                    <div className='caja1'>
                    <Icon className='fa fa-suitcase'></Icon>
                    <Expeyeduitem 
                        title={'Diseñador de estructura 3d'}
                        year={'2020'}
                        subtitle={'Vista 3D'}
                        text={'Es una afición mas de mi vida, diseño estructuras en 3d para despues llevarlas a la impresora'}
                    />
                    <Icon className='fa fa-suitcase'></Icon>
                    <Expeyeduitem 
                        title={'Programador Junior'}
                        year={'2021'}
                        subtitle={'Vista 3D'}
                        text={'Son de mi proyecto que llevo acabo para exponer mis figuras hechas en la impresora'}
                    />
                    </div>
                </div>
            </div>
        </ExpeyeduStiled>
    )
}

const ExpeyeduStiled = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    
    

    i{
            color: #fff;
            display: inline-block;
            width: 100px;
            height: 40px;
            line-height: 36px;
            text-align: center;
            border-radius: 50%;
            margin-right: 1px;
            background: #fdb404;
            font-size: 20px;
            @media screen and (max-width: 780px){
                color: #fff;
                display: inline-block;
                width: 35px;
                height: 35px;
                line-height: 36px;
                text-align: center;
                border-radius: 50%;
                margin-right: 1px;
                background: #fdb404;
                font-size: 20px;
            }
        }
.container{
    z-index:-1;
}
    
.caja{
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        
        
        @media screen and (max-width: 780px){
                flex-direction: column;
            }

        h5{
                font-size: 1.2rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                font-weight: 400;
                text-transform: uppercase;
                
        }

        h6{
                font-size: 1.2rem;
                font-weight: 400;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;

                span{
                        font-size: 1.1rem;
                        font-family: 'Oswald', sans-serif;
                        font-weight: 100;
                        text-transform: capitalize;
                        border-left: 1px solid #bdbcbd;
                        color: #bdbcbd;
                        margin-left: 4px;
                        padding-left: 8px;
                    }
        }

        p{
            line-height: 1.8;
        margin-bottom: 0;
        font-weight: 400;
        color: #bdbcbd;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, .05);
        font-family: 'Open Sans', sans-serif;
        }

        
    }
.caja1{
    margin-top:1rem;
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 780px){
                flex-direction: column;
            }
        h5{
                font-size: 1.2rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                font-weight: 400;
                text-transform: uppercase
        }

        h6{
                font-size: 1.2rem;
                color: var(--color-letra-blanco);
                font-weight: 400;
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;

                span{
                        font-family: 'Oswald', sans-serif;
                        font-size: 1.1rem;
                        font-weight: 100;
                        text-transform: capitalize;
                        border-left: 1px solid #bdbcbd;
                        color: #bdbcbd;
                        margin-left: 4px;
                        padding-left: 8px;
                    }
        }

        p{
            line-height: 1.8;
        margin-bottom: 0;
        font-weight: 400;
        color: #bdbcbd;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, .05);
        font-family: 'Open Sans', sans-serif;
        }
    }

    .h3{
                font-size: 1.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                justify-content: center;
                display: flex;
                margin-bottom:2rem;

    }
`;

export default Expeyedu
