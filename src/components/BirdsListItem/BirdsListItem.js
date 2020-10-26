import React,{ Component } from 'react';
import './BirdsListItem.scss';

class BirdsListItem extends Component {
    constructor(props) {
        super();
        this.state= {

        }
        this.option = React.createRef()
    }


    

    render() {

        console.log(this.props.selected)
        let baseStyle = 'bird-list-item';
        let optionStyle = 'bird-list-item';
       /*  const classToAdd = this.props.isAnswerCorrect ? "success" : "error"; */

      /*   if (selected && id === currentRightOption) {
            optionStyle = `${styles.options_item} ${styles.options_item__correct}`;
          } else if (selected && id !== currentRightOption) {
            optionStyle = `${styles.options_item} ${styles.options_item__incorrect}`;
          } else optionStyle = styles.options_item; */
         if (this.props.selected &&  this.props.isAnswerCorrect) {
            optionStyle = `bird-list-item success`
            if (this.option.current.classList.contains('error')) {
                optionStyle = `bird-list-item error`
            }
          } else if (this.props.selected &&  !this.props.isAnswerCorrect ) {
            optionStyle = `bird-list-item error`
          }
          else optionStyle = baseStyle;

          
        
       



       
        return(
            <>
                <li id={this.props.id} 
                    className={this.props.isLevelChanged ? "bird-list-item" : optionStyle}
                    onClick={(e) => this.props.onClick(this.props.name, this.props.birdData)}
                    ref={this.option}
                >
                    <span  className="bird-list-item__indicator"></span>
                    {this.props.name}
                </li>
            </>
        )
    }
}

export default BirdsListItem;