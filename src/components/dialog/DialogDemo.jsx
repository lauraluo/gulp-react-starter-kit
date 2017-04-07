import React from 'react'
import {DialogActions} from "./Dialog"
import $ from "jquery";

class DialogDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "appData"
        }
        this.subView = {};
    }

    _openCallback = () => {
        console.log("_openCallback");
        $(this.subView).find('input').focus();
    }
    
    _submitCallback = () => {
        console.log("submit");
        alert($(this.subView).find('input').val());
        return true;
    }
    
    _submitCallback2 = () => {
        console.log("submit");
        this.setState({data: "aadffd"});
        return true;
    }
    _subView = () => {
        return (
            <div ref={(subView)=> { this.subView = subView}}>
                <p className='title'>Sub view of DialogDemo APP abcd</p>
                <p>{this.state.data}</p>
                <input type="text"/>
                <button className='btn' onClick={this._submitCallback}>送出鈕</button>
            </div>
        )
    }

    _openDialog = () => {
        DialogActions.showDialog({
            title: "Dialog標題",
            content: this._subView,
            didOpened: this._openCallback,
            buttons:  [
                {
                    text: "取消",
                    callback: this._submitCallback2
                },
                {
                    text: "送出鈕",
                    callback: this._submitCallback
                }
            ]
        });
    }

    render() {
        return (
            <div className='dialogDemo'>
                <button className='btn' onClick={this._openDialog}>打開dialogavcd</button>
            </div >
        )
    }
}
export default DialogDemo