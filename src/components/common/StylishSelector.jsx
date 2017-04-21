import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash';

class StylishSelector extends Component {

  constructor(props) {
    super(props);
    // 原本在 componentWillMount 操作的動作可以放在這
  }

  _handleChange = (event) => {
    var index = event.nativeEvent.target.selectedIndex;

    var selectedOption = _isEmpty(event.target.value)
      ? {}
      : {
        value: event.target.value,
        text: event.nativeEvent.target[index].text
      };

    this
      .props
      .handleChange(selectedOption);
  };

  _handleSelect = (event) => {
    if (typeof this.props.handleSelect == 'undefined') 
      return false;
    this
      .props
      .handleSelect(event);
  };

  _renderOptions = (optionsSource) => {
    const options = optionsSource.map((option) => {
      return (
        <option
          value={option.value}
          key={this.props.modelName + '_option_' + index}
          disabled={option.disabled || false}>
          {option.text}
        </option>

      );
    });
  };

  _renderFirstOption = (placeholder, selectedOption, sourceOptions) => {
    if (_isEmpty(placeholder) || _isEmpty(selectedOption) || _isEmpty(sourceOptions)) {
      return null;
    }
    return (
      <option value="">{'請選擇' + placeholder}</option>
    );
  };

  render() {

    const {optionList, placeholder, selectedOption, className} = this.props;

    return (
      <div className={'select-style ' + className}>
        <div
          className={'select-style-mask' + (_isEmpty(selectedOption) || _isEmpty(selectedOption.text)
          ? ''
          : ' has-value')}>
          {selectedOption.text || placeholder}
        </div>

        <select
          value={selectedOption.value || ''}
          onChange={this._handleChange}
          onFocus={this._handleSelect}
          ref={'Select'}>

          {this._renderFirstOption(placeholder, selectedOption, optionList)}
          {this._renderOptions(optionList)}

        </select>
      </div>
    );
  }
}

StylishSelector.defaultProps = {
  optionList: [],
  selectedOption: {},
  modelName: '',
  placeholder: '',
  className: '',
  handleChange: () => {}
};

StylishSelector.propTypes = {
  optionList: PropTypes.array,
  selectedOption: PropTypes.object,
  modelName: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func
};

export default StylishSelector;