import React,{ Component } from 'react';
import './BirdsListItem.scss';

class BirdsListItem extends Component {
    constructor(props) {
        super();
        this.state= {

        }
    }

    render() {
        return(
            <>
                <li className="bird-list-item" onClick={() => this.props.onClick(this.props.name, this.props.birdData)}>
                    <span className="bird-list-item__indicator"></span>
                    {this.props.name}
                </li>
            </>
        )
    }
}

export default BirdsListItem;