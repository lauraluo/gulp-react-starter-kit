import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import _isEmpty from 'lodash/isEmpty';
import _isUndefined from 'lodash/isUndefined';

import '../../scss/components/common/StylishSelector.scss'

const propTypes = {
  optionList: PropTypes.array,
  selectedOption: PropTypes.object,
  modelName: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func
}
 
const defaultProps = {
  optionList: [],
  selectedOption: {},
  modelName: '',
  placeholder: '',
  className: '',
  handleChange: () => {}
};

class StylishSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption
    }
  }

  handleChange = (event) => {
    var index = event.nativeEvent.target.selectedIndex;

    var selectedOption = _isEmpty(event.target.value)
      ? {}
      : {
        value: event.target.value,
        text: event.nativeEvent.target[index].text
      };

    this.setState({
      selectedOption: selectedOption
    });

    if (!_isUndefined(this.props.handleChange)) 
      this.props.handleChange(selectedOption);
  };

  handleFocus = (event) => {
    if (!_isUndefined(this.props.handleSelect))
      this.props.handleSelect(event);
  };

  renderOptions = (optionsSource) => {
    return optionsSource.map((option, index) => {
      return (
        <option
          value={option.value}
          key={this.props.modelName + '_option_' + index}
          disabled={option.isDisable || false}>
          {option.text}
        </option>
      );
    });
  };

  renderFirstOption = (placeholder, selectedOption, sourceOptions) => {
    if (!_isEmpty(selectedOption) 
    || _isEmpty(sourceOptions)) {
      return null;
    }

    return (
      <option value="">{'請選擇' + placeholder}</option>
    );
  };

  render() {
    const {optionList, placeholder, className, modelName} = this.props,
          selectedOption = this.state.selectedOption;

    return (
      <div className={cx('select-style', className)}>
        <div
          className={cx('select-style-mask', 
                       {'has-value': !_isEmpty(selectedOption) 
                                     && !_isEmpty(selectedOption.text)})}>
          {selectedOption.text || placeholder}
        </div>

        <select
          value={selectedOption.value || ''}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          name={modelName}
          ref={'Select'}>
          {this.renderFirstOption(placeholder, selectedOption, optionList)}
          {this.renderOptions(optionList)}

        </select>
      </div>
    );
  }
}

StylishSelector.defaultProps = defaultProps;

StylishSelector.propTypes = propTypes;

export default StylishSelector;