import React from 'react';
import {storiesOf} from '@kadira/storybook';
import '../../src/scss/components/common/StylishSelector.scss'
import StylishSelector from '../../src/components/common/StylishSelector';

storiesOf('Form Style', module)
.add('Stylish Selector', () => {
  const optionList = [
    {value: '1', text: 'Option 1'},
    {value: '2', text: 'Option 2'},
     ];
  return (<StylishSelector optionList={optionList} />);
});