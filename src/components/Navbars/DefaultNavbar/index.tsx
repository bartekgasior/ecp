import React from 'react'
import NavbarContainer from './DefaultNavbar.styles';

interface IProps {
    activeModule: string
}

const Navbar: React.FC<IProps> = ({ activeModule }) => {
    return (
        <NavbarContainer>

        </NavbarContainer>
    )
}

export default Navbar