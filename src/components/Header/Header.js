import React from 'react';
import './Header.scss';
import Logo from '../../img/logo.svg';
import Nav from './Nav/Nav';


const Header = ({score,level}) => {
    return(
        <div className="header">
            <div className="header__top">
                <img src={Logo} className = "header__logo"/>
                <div className="header__score-block">
                    Score:&nbsp;<span className="header__score-total">{score}</span>
                </div>
            </div>
            <Nav level={level}/>
        </div>
    )
}

export default Header;