import React, {useState} from 'react'
import { MainLayout } from '../Styles/Layouts'
import styled from 'styled-components'
import { Icon } from '../Styles/Icons'
import Imagen1 from '../img/Imagen1.JPG' 
import Imagen2 from '../img/Imagen2.JPG' 
import Imagen3 from '../img/Imagen3.jpg' 
import Imagen4 from '../img/imagen4.jpg' 
import Imagen5 from '../img/imagen5.jpg' 
import Imagen6 from '../img/imagen6.jpg'

const Blog = () => {

    const data=[
        {
            id: 1,
            image: Imagen1,
            title: 'Torre de reloj con luz',
            text: 'Hecho con filamento PLA 3D'
        },
        {
            id: 2,
            image: Imagen2,
            title: 'Cajas de pandora',
            text: 'Hecho con filamento PLA 3D'
        },
        {
            id: 3,
            image: Imagen3,
            title: 'Caja de pandoras',
            text: 'Hecho con filamento PLA 3D'
        },
        {
            id: 4,
            image: Imagen4,
            title: 'Coliseo',
            text: 'Hecho con filamento PLA 3D'
        },
        {
            id: 5,
            image: Imagen5,
            title: 'Templo del Patriarca',
            text: 'Hecho con filamento PLA 3D'
        },
        {
            id: 6,
            image: Imagen6,
            title: 'Estatua ded Athena',
            text: 'Hecho con filamento PLA 3D'
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimage, setTempImage] = useState('');

    const getImg = (image) =>{
        setTempImage(image);
        setModel(true);
    }
    return (
        <MainLayout>
            <BlogStyled>
                <div className={model? 'model open': 'model'}>
                    <img src={tempimage} alt=''/>
                    <Icon className='fa fa-times' onClick={() =>setModel(false)}></Icon>
                </div>
                <div className='imagenportafolio'>
                        {data.map((item,index)=>{
                            return( 
                                    <div className='pics' key={index} onClick={()=> getImg(item.image)}>
                                        <div className='portafolio-image'>
                                            <img src={item.image} alt=''/>
                                            <h6>{item.title}</h6>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                            )

                        })}
                    </div>
            </BlogStyled>
        </MainLayout>
    )
}

const BlogStyled = styled.div`

    .imagenportafolio{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 3rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 1000px){
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-row-gap: 3rem;
                grid-column-gap: 1rem;
            }
            @media screen and (max-width: 700px){
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-row-gap: 3rem;
                grid-column-gap: 1rem;
            }

        img{

            
        width:100%;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 6px 18px #e7e3de48;
        border-radius: 15px;
        cursor: pointer;
            
        
        &:hover{
            filter: opacity(.6);
        }
        }
        h6{
                font-size: 1.2rem;
                font-weight: 400;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
            }
        p{
                font-size: 1rem;
                color: #bdbcbd;
                font-family: 'Oswald', sans-serif;
                font-size: 1.1rem;
                font-weight: 100;
            }
    }
    .model{
        width: 100%;
        height:100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        visibility: hidden;
        opacity: 0;
        transform: scale(0);
        overflow: hidden;
        z-index: 999;
        
        

        i{
            position: fixed;
            top: 10px;
            right: 10px;
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            

            color: #fff;
            display: inline-block;
            width: 35px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            border-radius: 50%;
            margin-right: 55px;
            background: #fdb404;
            font-size: 25px;
    }    

    }
    .model.open{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        
    }
    .model img{
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
        border-radius: 35px;
        
    }
    
`;
export default Blog
