import React from 'react'
import { Link } from 'react-router-dom';
import SimpleNavbarContainer from './SimpleNavbar.styles';

interface IProps {
    isLogin: boolean
}

const SimpleNavbar: React.FC<IProps> = ({ isLogin }) => {
    return (
        <SimpleNavbarContainer>
            <Link className={`simple-navbar-btn ${isLogin ? 'simple-navbar-is-active' : ''}`} to={'/'}>
                Login
            </Link>

            <Link className={`simple-navbar-btn ${isLogin ? '' : 'simple-navbar-is-active'}`} to={'/register'}>
                Register
            </Link>
        </SimpleNavbarContainer>
    )
}

export default SimpleNavbar;