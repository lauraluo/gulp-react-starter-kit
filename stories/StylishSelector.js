import React from 'react';
import { storiesOf } from '@kadira/storybook';
import '../src/scss/components/StylishSelector.scss'
import StylishSelector from '../src/components/StylishSelector';


storiesOf('Form Style', module)
  .add('default', () => (
    <StylishSelector />
  ))