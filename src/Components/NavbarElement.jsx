import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    heigth: 80px;
    position: sticky;
    top:0;
    /* background-color: #212529; */
    background-color: #111;
    z-index: 1;
`;

export const Wrapper = styled.div`
    width:100%;
    heigth: 100%;
    

`;

export const Menu = styled.ul`
    heigth:100%;
    display:flex;
    justify-content: center;
    list-style: none;
    


    @media screen and (max-width: 960px) {
        background-color: #111;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    sticky: top;
    
    }
`;

export const MenuItem = styled.li`
    heigth:100%;
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-itmes:center;
    heigth:100%;
    padding: 1.5rem 2.5rem;
    color:#FDB404;
    font-family: 'Raleway', sans-serif;
    font-size: 0rem;
    font-weight: 400;
    cursor: pointer;

    @media screen and (max-width: 960px){
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
    }

    &:hover {
    color: #fff;
    transition: 0.5s all ease;
    
    }
    

`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
    display: flex;
    padding:20px;
    align-items: center;
    cursor: pointer;
    color:#FDB404;
    
    }

    
`;

