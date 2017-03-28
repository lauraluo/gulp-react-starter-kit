import Reflux from "reflux"
import React from 'react'
import $ from "jquery"

var DialogActions = Reflux.createActions([
    "showDialog",
    "showDialogYesNo",
    "showDialogList",
    "showDialogListYesNo",
    "showDialogScene",
    "showDialogToast",
    "hideDialog",
    "setDialogName",
    "clearDialogName"
]);

class DialogStore extends Reflux.Store {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            posY: 0,
            type: 0,
            title: '',
            content: '',
            buttons: [],
            callbackFn: []
        };
        this.listenables = DialogActions;
    }

    _updateState() {
        if (!this.state.isOpened && this.state.type != 0) {
            this.state.posY = $(document).scrollTop();
        }

        this.state.isOpened = (this.state.type != 0);
        this.trigger(this.state);
    }

    onShowDialog(title, content, button, confirmFn) {
        this.state.type = 1;
        this.state.title = title;
        this.state.content = content;
        this.state.buttons = [button];
        this.state.callbackFn = [confirmFn];
        this._updateState();
    }

}

class Dialog extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {}; // our store will add its own state to the component's
        this.store = DialogStore; // <- just assign the store class itself
    }

    render() {
        return (
            <div className='abc'>{ "the dialog is: "+ this.state.isOpened }</div>
        )
    }
}

export {Dialog as default, DialogStore, DialogActions};
