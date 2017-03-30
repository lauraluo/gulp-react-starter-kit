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
        this._BodyComponent = this
            ._BodyComponent
            .bind(this);
        this._relayout = this
            .props
            ._relayout
            .bind(this);
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate() {
        this._relayout();
    }

    _BodyComponent = (props) => {
        var className = (props.extraPadding)
            ? 'dialog-box-body dialog-box-body-padding'
            : 'dialog-box-body';
        var renderResult;

        if (typeof(this.state.content) === 'string') {
            let content = this
                .state
                .content
                .split('\n')
                .map(function (item, i) {
                    return (
                        <span key={'dialog-item' + i}>{item}<br/></span>
                    );
                });

            renderResult = (
                <div className={className}>
                    {content}
                </div>
            );

        } else {
            var Content = this.state.content;
            renderResult = (
                <div className={className}>
                    <Content/>
                </div>
            );
        }

        return renderResult;
    }

    _HeaderComponent = () => {

    }
    
    _FooterComponent = () => {

    }

    render() {

        var dialogBoxClass = 'dialog-box';
        var dataAttr = {
            'data-dialog-name': this.state.dialogName
        };
        var hasExtraPaddingWithBody = false;

        switch (this.state.type) {
            default:
            case 0:
                return false;
            case 1:
            case 2:
                break;
            case 3:
                hasExtraPaddingWithBody = true;
                break;
            case 4:
                dialogBoxClass += ' dialog-list'
                break;
            case 5:
                dialogBoxClass += ' dialog-scene'
                break;
        }

        return (
            <div className="dialog" {...dataAttr}>
                <this._BodyComponent
                    ref={body => this.dialogBody = body}
                    extraPadding={hasExtraPaddingWithBody}/>
            </div>
        )
    }

}

var MixiedDialog = DialogRelayoutMixin(Dialog);
export {MixiedDialog as default, DialogStore, DialogActions};
