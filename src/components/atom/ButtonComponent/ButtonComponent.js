import React from 'react'; 
import injectSheet from 'react-jss';
const styles = {
    button: {
        fontSize: '16px',
        display: 'inline-block',
        backgroundColor: props => props.buttonColor ? props.buttonColor : '',
    },

};
//default button component
class ButtonComponent extends React.Component{
    render(){
        const {classes, title = 'Yes', onClickHandler, buttonColor} = this.props;

        return(
            <React.Fragment>
            <button type="button" className={classes.button} color={buttonColor}
                onClick={onClickHandler}> {title} </button>
            </React.Fragment>
        )
    }
}


export default injectSheet(styles)(ButtonComponent);