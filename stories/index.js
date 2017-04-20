import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import DialogDemo  from '../src/components/dialog/DialogDemo';
import Dialog, {DialogActions} from '../src/components/dialog/Dialog';
import RefluxMock from '../src/components/core/RefluxMockProvider';
import '../src/scss/main.scss';


// DialogActions.showDialog({
//     title: "Dialog標題",
//     content: this._subView,
//     didOpened: this._openCallback,
//     buttons:  [
//         {
//             text: "取消",
//             callback: this._submitCallback2
//         },
//         {
//             text: "送出鈕",
//             callback: this._submitCallback
//         }
//     ]
// });

var DialogDefault = RefluxMock( Dialog, DialogActions, "showDialog", {
      title: "Dialog標題",
      content: "test",
      didOpened: function(){console.log("open")},
      buttons:  [
          {
              text: "取消",
              callback: function(){console.log("click 取消")}
          },
          {
              text: "送出鈕",
              callback: function(){console.log("click 送出鈕")}
          }
      ]}
    );

storiesOf('Dialog', module)
  .add('DialogDefault', () => (<DialogDefault/>));