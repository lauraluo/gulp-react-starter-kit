import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import _isEmpty from 'lodash/isEmpty';
import _isUndefined from 'lodash/isUndefined';

class StylishSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption
    }
  }

  _handleChange = (event) => {
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

  _handleFocus = (event) => {
    if (!_isUndefined(this.props.handleSelect))
      this.props.handleSelect(event);
  };

  _renderOptions = (optionsSource) => {
    return optionsSource.map((option, index) => {
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
    if (_isEmpty(placeholder) 
    || !_isEmpty(selectedOption) 
    || _isEmpty(sourceOptions)) {
      return null;
    }

    return (
      <option value="">{'請選擇' + placeholder}</option>
    );
  };

  render() {
    const {optionList, placeholder, className} = this.props,
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
          onChange={this._handleChange}
          onFocus={this._handleFocus}
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
  placeholder: 'Options',
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