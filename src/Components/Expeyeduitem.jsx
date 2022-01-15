import React from 'react'
import styled from 'styled-components'

const Expeyeduitem = ({title, year, subtitle, text }) => {
    return (
        <ExpeyeduitemStyled>
            <h5>{title}</h5>
            <h6>{year}<span>{subtitle}</span></h6>
            <p>{text}</p>

        </ExpeyeduitemStyled>
    )
}

const ExpeyeduitemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 2px solid var(--color-naranja);
    background-color: var(--color-fondo-tarjeta);
    position: relative;
    width: 100%;
`;

export default Expeyeduitem
