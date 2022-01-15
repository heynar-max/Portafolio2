import React from 'react'
import Portafolioweb from '../Components/PortafoliowebCom'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layouts'

const PortafolioWeb = () => {
    return (
        <>
            <MainLayout>
                <Title title={'mi'} title1={'portafolio'} span={'trabajo'}/>
                <Portafolioweb/>
            </MainLayout>
        </>
    )
}

export default PortafolioWeb
