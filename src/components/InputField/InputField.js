import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.css';

import Warning from '../Warning/Warning.js';

const InputField = ({
  clientData,
  handleChange,
  removeWarning,
  text,
  name,
  title,
  required,
  placeholder,
  type }) => {

  const { invalidData } = clientData;

  const checkData = (invalidData) => {
    return invalidData ? invalidData : {};
  }

  const checkStarNecessity = (required) => {
    if (required) {
      return (
        <div className={styles.star}>*</div>
      )
    }
  }

  const checkWarningNecessity = (required) => {
    if (required) {
      return (
        <Warning
          invalidData={checkData(invalidData)[name]}
          removeWarning={removeWarning}
          name={name}
        />
      )
    }
  }

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
          onChange={handleChange}
          required={required}
          placeholder={placeholder || ''}
        />
        {checkStarNecessity(required)}
      </label>
      {checkWarningNecessity(required)}
    </div>
  )
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
  removeWarning: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
}