import React from 'react'
import styled from 'styled-components'

const Separador = () => {
    return (
        <SeparadorStiled>
            <hr className='separador'/>
        </SeparadorStiled>
    )
}
const SeparadorStiled = styled.div`

.separador
    border-top: 1px solid #252525;
    margin: 70px auto 55px !important;
    max-width: 40%;
} 
`;
export default Separador
