import Reflux from "reflux"
import React, { Component } from 'react'
import $ from "jquery"
import { DialogActions } from "./Dialog"

function DialogDemoContent(props) {
  return <h1>Hello, {props.name}</h1>;
}


class DialogDemo extends React.Component {
    _openDialog() {
        // var dialogContent = <DialogDemoContent name="SBBBB"/>
        DialogActions.showDialog("newName", "ddddd", "button", "confirmFn")
    }

    render() {

        return (
            <div className='dialogDemo'>
                <button className='btn' onClick={this._openDialog}>點擊切換diaog狀態</button>
            </div >
        )
    }
}
export default DialogDemo