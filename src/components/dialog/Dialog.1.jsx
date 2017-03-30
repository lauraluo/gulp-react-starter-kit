import Reflux from "reflux"
import React from 'react'
import $ from "jquery"
import DialogButton from "./DialogButton"
import DialogRelayoutMixin from "../core/Mixin.DialogRelayout"

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

class Dialog extends Reflux.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}; // our store will add its own state to the component's
        this.store = DialogStore; // <- just assign the store class itself
    }

    componentDidUpdate() {
        this.props._relayout.bind(this);
    }

    _renderBody(extraPadding) {

        var className = extraPadding ? 'dialog-box-body dialog-box-body-padding' : 'dialog-box-body';

        if (typeof(this.state.content) === 'string') {
            var content = this
                .state
                .content
                .split('\n')
                .map(function (item, i) {
                    return (
                        <span key={'dialog-item' + i}>{item}<br/></span>
                    );
                });
            return (
                <div className={className} ref="content">
                    {content}
                </div>
            );
        } else {
            return (
                <div className={className} ref="content">
                    {this.state.content}
                </div>
            );
        }
    }

    _renderFooter() {

        var classNames = ['dialog-button-block-primary'];

        if (this.state.buttons.length == 2) {
            classNames = ['dialog-button-inline', 'dialog-button-inline-primary']
        }

        var buttons = this
            .state
            .buttons
            .map(function (name, i) {

                return (<DialogButton
                    key={i}
                    name={name}
                    className={classNames[i]}
                    callback={this.state.callbackFn[i]}/>);
            }.bind(this));

        return (
            <div className="dialog-box-footer">{buttons}</div>
        );
    }

    render() {
        var dialogBoxClass = 'dialog-box';
        var bodyRender;
        
        switch (this.state.type) {
            default:
            case 0:
                return false;
            case 1:
            case 2:
                bodyRender = this._renderBody();
                break;
            case 3:
                bodyRender = this._renderBody(true);
                break;
            case 4:
                bodyRender = this._renderBody();
                dialogBoxClass += ' dialog-list'
                break;
            case 5:
                bodyRender = this._renderBody();
                dialogBoxClass += ' dialog-scene'
                break;
        }

        var headerRender = this.state.title.length > 0
            ? (
                <header>{this.state.title}</header>
            )
            : '';
        var footerRender = this.state.buttons.length > 0
            ? this._renderFooter()
            : '';

        var dataAttr = {
            'data-dialog-name': this.state.dialogName
        };

        return (
            <div className="dialog" {...dataAttr}>
                <div className="dialog-backdrop"></div>
                <div className={dialogBoxClass}>
                    <div className="dialog-container">
                        {headerRender}
                        {bodyRender}
                        {footerRender}
                    </div>
                </div>
            </div>
        )
    }

}

var MixiedDialog = DialogRelayoutMixin(Dialog);

export {MixiedDialog as default, DialogStore, DialogActions};
