import React from 'react';
import './NavItem.scss';

const NavItem = ({itemName,currentLevel,index}) => {

    return (
        <>
           <li className={index === currentLevel ? "nav__item active" : "nav__item"}> <a href="" className="nav__link">{itemName}</a></li>
        </>
    );
}
export default NavItem;