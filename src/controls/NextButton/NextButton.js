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
                <button className={ this.props.className} disabled={this.props.disabled} onClick={() => this.props.onClick()}>Next Level</button>
            </>
        )
    }
}

export default NextButton;