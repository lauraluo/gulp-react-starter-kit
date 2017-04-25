//測試工具
import React from 'react'
//import renderer from 'react-test-renderer'
import {mount, render, shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

//被測試的相關模組
import StylishSelector from "./StylishSelector"

describe('<StylishSelector />', () => {
  
  it('should render 2 <option /> components', () => {
    let optionList = [
      {
        value: 1,
        text: 'Option 1'
      }, {
        value: 2,
        text: 'Option 2'
      }
    ];
    const wrapper = shallow(<StylishSelector optionList={optionList}/>);
    expect(wrapper.find('option').length).toEqual(optionList.length + 1);
  });



});