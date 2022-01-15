import React from 'react'
import Title from '../Components/Title'
import SobreMi from '../Components/SobreMi'
import { MainLayout } from '../Styles/Layouts'

const Sobre = () => {
    return (
        <>
        <MainLayout>
            <Title title={'sobre'} title1={'mi'} span={'información'} />
            <SobreMi/>
        </MainLayout>
        </>
    )
}

export default Sobre
