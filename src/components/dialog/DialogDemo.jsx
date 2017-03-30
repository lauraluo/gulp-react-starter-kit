import React from 'react'
import {DialogActions} from "./Dialog"
import $ from "jquery";

class DialogDemo extends React.Component {
    constructor(props) {
        super(props);
        // this.subView = this.subView.bind(this);
        this._openDialogA = this._openDialogA.bind(this);
        this._openDialogB = this._openDialogB.bind(this);
        this.submitCallback = this.submitCallback.bind(this);
        this.viewA = {};
        this.viewB = {};
    }

    submitCallback() {
        alert("lalalalal");
        console.log(this.viewA);
        // console.log(this.viewB);
        $(this.viewA).fadeOut();
    }

    _subViewA = () => {
        return (
            <div ref={(subView)=> { this.viewA = subView}}>
                <p className='title'>sub view A</p>
                <input type="text"/>
                <button className='btn' onClick={this.submitCallback}>送出鈕</button>
            </div>
        )
    }

    _subViewB = () => {
        return (
            <div ref={(subView)=> {this.viewB = subView}}>
                <p className='title'>sub view B</p>
                <input type="text"/>
                <button className='btn' onClick={this.submitCallback}>送出鈕</button>
            </div>
        )
    }

    _openDialogA() {
        DialogActions.showDialog("Dialog標題", this._subViewA, "button", "confirmFn");
    }

    _openDialogB() {
        DialogActions.showDialog("Dialog標題", this._subViewB, "button", "confirmFn");
    }

    render() {
        return (
            <div className='dialogDemo'>
                <button className='btn' onClick={this._openDialogA}>打開dialogA</button>
                <button className='btn' onClick={this._openDialogB}>打開dialogB</button>
            </div >
        )
    }
}
export default DialogDemo