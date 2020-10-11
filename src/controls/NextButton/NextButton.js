import React,{ Component } from 'react';
import './NextButton.scss';

class NextButton extends Component {
    constructor(props) {
        super();
        this.state= {

        }
    }

    render() {
        return(
            <>
                <button className="btn-next active" onClick={(e) => this.props.onClick(e)}>Next Level</button>
            </>
        )
    }
}

export default NextButton;