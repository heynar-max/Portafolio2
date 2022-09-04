import React from 'react'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/Layouts'
import Blog from '../Components/Blog'

const BlogPage = () => {
    return (
        <>
            <MainLayout>
                <Title title={'mis'} title1={'diseños 3D'} span={'trabajos'}/>
                <Blog/>
            </MainLayout>
        </>
    )
}

export default BlogPage
