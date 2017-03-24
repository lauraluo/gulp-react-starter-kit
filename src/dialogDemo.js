import React from 'react';
import Dialog from './components/dialog/Dialog';
import ReactDOM from 'react-dom';
import DialogDemo from './components/dialog/DialogDemo';

ReactDOM.render(
    <DialogDemo/>, document.getElementById('main'))
ReactDOM.render(
    <Dialog/>, document.getElementById('dialog'))