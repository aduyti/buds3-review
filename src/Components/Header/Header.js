import React from 'react';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Header = () => {
    return (
        <nav>
            <CustomNavLink to='/'>Home</CustomNavLink>
            <CustomNavLink to='reviews'>Reviews</CustomNavLink>
            <CustomNavLink to='dashboard'>Dashboard</CustomNavLink>
            <CustomNavLink to='blogs'>Blogs</CustomNavLink>
            <CustomNavLink to='about'>About</CustomNavLink>
        </nav>
    );
};

export default Header;