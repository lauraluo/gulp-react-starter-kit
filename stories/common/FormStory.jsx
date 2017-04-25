import React from 'react';
import {storiesOf} from '@kadira/storybook';
import StylishSelector from '../../src/components/common/StylishSelector';

storiesOf('Form Style', module).add('Stylish Selector', () => {
  
  const optionList = [
    {
      value: 1,
      text: 'Option 1'
    }, {
      value: 2,
      text: 'Option 2'
    }
  ];

  const optionListWithDisalbeOption = [
    {
      value: 1,
      text: 'Option 1',
      isDisable: false
    }, {
      value: 2,
      text: 'Option 2',
      isDisable: true
    }, {
      value: 3,
      text: 'Option 3',
      isDisable: false
    }
  ];
  return (
    <div>
      <h3>Default</h3>
      <StylishSelector optionList={optionList}/>

      <h3>Strong</h3>
      <StylishSelector optionList={optionList} className='select-style-strong'/>

      <h3>Secondary</h3>
      <StylishSelector optionList={optionList} className='select-style-secondary'/>

      <h3>Button</h3>
      <StylishSelector optionList={optionList} className='select-style-button' placeholder="收件人"/>
      
      <h3>Disabled Option</h3>
      <StylishSelector optionList={optionListWithDisalbeOption}/>
    </div>
  );
});