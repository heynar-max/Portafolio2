import React from 'react'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layouts'
import Contact from '../Components/Contact'
import Particle from '../Components/Particle'

const Contacto = () => {
    return (
        <>
        
            <MainLayout>
                <Title title={'poner en'} title1={'contacto'} span={'contacto'}/>
                
                <Contact/>
                <Particle/>
            </MainLayout>
        </>
    )
}

export default Contacto
