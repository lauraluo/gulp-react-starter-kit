import React, {Component} from 'react'
import {DialogActions} from "./Dialog"

class DialogButton extends Component {
    constructor(props) {
        super(props);
    }
    _onClick = () => {

        var isOverride = false;

        if (this.props.callback && typeof this.props.callback  == "function") {
            isOverride = this.props.callback();
        }

        if (isOverride && DialogActions) {
            DialogActions.hideDialog();
        }
    }

    render() {
        return (
            <div className={this.props.className} onClick={this._onClick}>{this.props.name}</div>
        );
    }
}

export default DialogButton;