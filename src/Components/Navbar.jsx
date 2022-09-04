import React, {useState} from 'react'
import { Container, MenuItem, Wrapper, Menu, MenuItemLink, MobileIcon, } from './NavbarElement'
import { Icon } from '../Styles/Icons'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container >
            <Wrapper>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <Icon className="fas fa-bars" />
                </MobileIcon>
                    <Menu open={showMobileMenu} >
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/'} onClick={() => setShowMobileMenu(!showMobileMenu)} >
                            <Icon className="fas fa-home" />
                            Home
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/about'}  onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-user" />
                            About
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/portafolio'} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className=" fas fa-briefcase" />
                            Portafolio
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/blog'} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-cube" />
                            Blog
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/contacto'} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Icon className="fas fa-address-card" />
                            Contacto
                            </MenuItemLink>
                        </MenuItem>
                        
                    </Menu>
            </Wrapper>
        </Container>
    )
}



export default Navbar
