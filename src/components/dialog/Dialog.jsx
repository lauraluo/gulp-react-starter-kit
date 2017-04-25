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
    "updateDialog",
    "setDialogName",
    "clearDialogName"
]);

class DialogStore extends Reflux.Store {
    constructor(props) {
        super(props);
        this.getInitState = function() { 
            return {
                isOpened: false,
                posY: 0,
                type: 0,
                title: '',
                content: {},
                buttons: [],
                didOpened: {},
                willOpen: {},
                didClosed: {}
            }
        };
        this.state = this.getInitState();
        this.listenables = DialogActions;
    }

    _updateState() {
        if (!this.state.isOpened && this.state.type != 0) {
            this.state.posY = $(document).scrollTop();
        }

        this.state.isOpened = (this.state.type != 0);
        this.trigger(this.state);
    }

    _checkConfigsInterface = (configs) => {
        var result = true;

        Object
            .keys(configs)
            .map((key, index) => {
                var value = configs[key];
            
                switch (key) {
                    case "title":
                        if (typeof value !== "string") {
                            console.error("title should be a string");
                            result = false;
                        }
                        break;
                    case "content":
                        if (typeof value !== "function" && typeof value !== "string") {
                            console.error("content should be a functional component or a string");
                            result = false;
                        }
                        break;
                    case "buttons":
                        if (Object.prototype.toString.call(value) !== '[object Array]') {
                            console.error("buttons should be an Array");
                            result = false;
                        }
                        break;
                    case "didOpened":
                    case "willOpen":
                    case "didClosed":
                        if (value === {} && typeof value !== "function") {
                            console.error("callback should be an function");
                            result = false;
                        }
                        break;
                    default:
                        return;
                }
            });

        return result;

    }

    onShowDialog = (inputConfigs) => {

        var configs = Object.assign(this.getInitState(),inputConfigs);

        if (!this._checkConfigsInterface(configs)) {
            return;
        }

        this.state.type = 1;
        this.state.title = configs.title;
        this.state.content = configs.content;
        this.state.buttons = configs.buttons;
        this.state.didOpened = configs.didOpened;
        this._updateState();
    }

    onHideDialog = () => {
        this.state = Object.assign({},this.getInitState());
        this._updateState();
    }

    onUpdateDialog = (updateConfigs) => {
        if(updateConfigs.title || updateConfigs.title === '') this.state.title = updateConfigs.title;
        if(updateConfigs.content)  this.state.content = updateConfigs.content;
        if(updateConfigs.buttons) this.state.buttons = updateConfigs.buttons;
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isOpened && !prevState.isOpened && typeof this.state.didOpened == "function") {
            this.state.didOpened();
        }
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
        var rendeResult = null;
        if (this.state.title && this.state.title.length > 0) {
            rendeResult = (
                <header>{this.state.title}</header>
            );

        }
        return rendeResult;
    }

    _FooterComponent = (props) => {
        var classNames = ['dialog-button-block-primary'];

        if (this.state.buttons.length > 1) {
            classNames = [];
            for(var i=0; i < this.state.buttons.length -1; i++) {
                classNames.push('dialog-button-inline');
            }
            classNames.push('dialog-button-inline-primary')
        }

        var buttons = Object
            .keys(this.state.buttons)
            .map((key, i) => {
                var item = this.state.buttons[i];
                return (<DialogButton
                    key={i}
                    name={item.text}
                    className={classNames[i]
                    ? classNames[i]
                    : ""}
                    callback={item.callback}/>)
            })

        return (
            <div className="dialog-box-footer">{buttons}</div>
        )
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
                <div className="dialog-backdrop"></div>
                <div className={dialogBoxClass}>
                    <div className="dialog-container">
                        <this._HeaderComponent ref={header => this.dialogHeader = header} dialogTitle={this.state.title}/>
                        <this._BodyComponent
                            ref={body => this.dialogBody = body}
                            extraPadding={hasExtraPaddingWithBody}/>
                        <this._FooterComponent ref={footer => this.dialogFooter = footer}/>
                    </div>
                </div>
            </div>
        )
    }
}

var MixiedDialog = DialogRelayoutMixin(Dialog);
export {MixiedDialog as default, Dialog as DialogCore,DialogStore, DialogActions};
