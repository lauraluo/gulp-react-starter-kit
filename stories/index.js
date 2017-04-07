import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import DialogDemo from '../src/components/dialog/DialogDemo';
import Dialog from '../src/components/dialog/Dialog';
import '../src/scss/main.scss';


storiesOf('Dialog', module)
  .add('Dialog', () => (
    <div>
      <DialogDemo/>
      <Dialog/>
    </div>
  ));

