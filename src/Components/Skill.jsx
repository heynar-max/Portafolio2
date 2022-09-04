import React from 'react'
import styled from 'styled-components'
import Progresbar from './Progresbar';


const Skill = () => {
    return (
        
        <SkillStyled>
            <div className='skill__container'>
            <div className='h3'>Mis Habilidades</div>
            <div className='skill__progrebar'>
                <Progresbar
                    title={'HTML5'}
                    width={'60%'}
                    text={'60%'}
                />
                <Progresbar
                    title={'STYLE COMPONENTS'}
                    width={'60%'}
                    text={'60%'}
                />
                <Progresbar
                    title={'JAVASCRIPT'}
                    width={'60%'}
                    text={'60%'}
                />
                <Progresbar
                    title={'PYTHON'}
                    width={'30%'}
                    text={'30%'}
                />
                <Progresbar
                    title={'REACT JS'}
                    width={'60%'}
                    text={'60%'}
                />
                <Progresbar
                    title={'PHOTOSHOP'}
                    width={'60%'}
                    text={'60%'}
                />
                <Progresbar
                    title={'RHINO 7'}
                    width={'90%'}
                    text={'90%'}
                />
                <Progresbar
                    title={'MESHMIXER'}
                    width={'70%'}
                    text={'70%'}
                />
                <Progresbar
                    title={'ZBRUSH'}
                    width={'30%'}
                    text={'30%'}
                />
            </div>
            </div>
        </SkillStyled>
    )
}
const SkillStyled = styled.section`

.h3{
                font-size: 1.5rem;
                color: var(--color-letra-blanco);
                font-family: 'Oswald', sans-serif;
                text-transform: uppercase;
                justify-content: center;
                display: flex;
                margin-bottom:2rem;

    }
    .skill__progrebar{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 3rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }



    }
`;

export default Skill
