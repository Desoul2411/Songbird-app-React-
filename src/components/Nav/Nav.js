import React,{ Component } from 'react';
import './Nav.scss';

class Nav extends Component {
    constructor(props) {
        super();
        this.state= {

        }
    }

    render() {
        return(
            <ul className="nav">
                <li className="nav__item"> <a href="" className="nav__link">Разминка</a></li>
                <li className="nav__item"><a href="" className="nav__link">Воробьиные</a></li>
                <li className="nav__item"><a href="" className="nav__link">Лесные птицы</a></li>
                <li className="nav__item"><a href="" className="nav__link">Певчие птицы</a></li>
                <li className="nav__item"><a href="" className="nav__link">Хищные птицы</a></li>
                <li className="nav__item"><a href="" className="nav__link">Морские птицы</a></li>
            </ul>
        )
    }
}

export default Nav;