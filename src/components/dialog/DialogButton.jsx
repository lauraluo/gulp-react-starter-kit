class DialogButton extends Component {
    
    _onClick () {

        var isOverride = false;

        if (this.props.callback) {
            isOverride = this.props.callback();
        }
        
        if (!isOverride && DialogActions) {
            DialogActions.hideDialog();
        }
    }

    render() {
        return (
            <div className={this.props.className} onClick={this._onClick }>{this.props.name}</div>
        );
    }
}

export default DialogButton;