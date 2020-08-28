import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" srcset="logo"/>
        </div>
    );
};

export default Header;