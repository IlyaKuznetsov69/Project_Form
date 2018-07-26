import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WarningContainer from 'containers/WarningContainer';
import styles from './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    
    this.checkStarNecessity = this.checkStarNecessity.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  checkStarNecessity() {
    const { requiredfield } = this.props;
    if (requiredfield) {
      return (
        <div className={styles.star}>*</div>
      )
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.inputRef.current.parentElement.parentElement.nextElementSibling.firstElementChild.focus();
    }
  }

  render() {

    const {
      clientData,
      text,
      name,
      title,
      handleChange,
      placeholder,
      type,
      requiredfield,
      showWarning } = this.props;

    return (
      <div className={styles.inputLabel}>
        <label>
          {text}
          <input
            className={styles.inputField}
            type={type || 'text'}
            title={title}
            name={name}
            defaultValue={clientData[name] || ''}
            onInput={handleChange}
            onBlur={() => showWarning(name)}
            onKeyPress={this.handleKeyPress}
            placeholder={placeholder || ''}
            ref={this.inputRef}
          />
          {this.checkStarNecessity()}
        </label>
        <WarningContainer 
          name={name}
          requiredfield={requiredfield}
        />
      </div>
    )
  }
}

export default InputField;

InputField.propTypes = {
  clientData: PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string,
    lastname: PropTypes.string,
    birthdate: PropTypes.string,
    motherland: PropTypes.string,
    idNumber: PropTypes.string,
    email: PropTypes.string,
    invalidData: PropTypes.shape({
      surname: PropTypes.string,
      name: PropTypes.string,
      birthdate: PropTypes.string,
      motherland: PropTypes.string,
      idNumber: PropTypes.string,
      email: PropTypes.string
    })
  }).isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  showWarning: PropTypes.func.isRequired,
  requiredfield: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

InputField.defaultProps = {
  placeholder: undefined,
  type: undefined
}