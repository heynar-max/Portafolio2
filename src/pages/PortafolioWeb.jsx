import React from 'react'
import Portafolio from '../Components/Portafolio'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layouts'

const PortafolioPage = () => {
    return (
        <>
            <MainLayout>
                <Title title={'mi'} title1={'portafolio'} span={'portafolio'}/>
                <Portafolio/>
            </MainLayout>
        </>
    )
}

export default PortafolioPage
