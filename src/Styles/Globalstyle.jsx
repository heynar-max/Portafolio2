import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-fondo: #111;
    --color-letra-blanco: #ffffff;
    --blanco-trasparente: #ffffff47;
    --color-naranja: #FDB404;
    --linea-habilidades: #252525;
    --color-fondo-tarjeta:#fbfbfb08;
}

*{
    padding: 0;
    margin: 0;
    
}

body{
    background-color: var(--color-fondo);
}

h1{
    font-size: 4rem;
    color: var(--color-letra-blanco);
    
    span{
        font-size: 3rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
}
`;

export default GlobalStyle;