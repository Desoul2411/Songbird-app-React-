import React,{ Component } from 'react';
import './Header.scss';
import Logo from '../../img/logo.svg';

import Nav from './Nav/Nav';

class Header extends Component {
    constructor(props) {
        super();
        this.state= {

        }
    }

    render() {
        return(
            <div className="header">
                <div className="header__top">
                    <img src={Logo} className = "header__logo"/>
                    <div className="header__score-block">
                        Score:&nbsp;<span className="header__score-total">{this.props.score}</span>
                    </div>
                </div>
                <Nav/>
            </div>
        )
    }
}

export default Header;