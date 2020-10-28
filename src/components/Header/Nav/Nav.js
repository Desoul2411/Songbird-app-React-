import React,{ Component } from 'react';
import NavItem from './NavItem/NavItem';
import './Nav.scss';

const Nav = ({level}) => {
    const menuItems = ['Разминка','Воробьиные','Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы'];
    return(
        <ul className="nav">
            {
                menuItems.map((item,index) => (
                    <NavItem key={index} itemName={item} index={index} currentLevel={level}/>
                ))
            }
        </ul>
    )
}

export default Nav;