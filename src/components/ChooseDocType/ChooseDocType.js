import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './ChooseDocType.css';

const ChooseDocType = ({ selectedDocument, selectDocument }) => {

  let chosenDoc = selectedDocument;

  const handleChange = (event) => {
    chosenDoc = event.currentTarget.value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    selectDocument(chosenDoc);
  }

  return (
    <CSSTransition
      in={true}
      classNames={{
        appear: styles.formAppear,
        appearActive: styles.formAppearActive,
        enter: styles.formEnter,
        enterActive: styles.formEnterActive,
        enterDone: styles.form
      }}
      appear={true}
      timeout={900}>
      <form
        className={styles.form}
        action='#'
        onSubmit={handleSubmit}>
        <h4 className={styles.header}>
          Выберите документ, который хотите получить:
      </h4>
        <select
          className={styles.inputField}
          defaultValue={selectedDocument}
          onChange={handleChange}
          required>
          <option
            className={styles.inputOption}
            value='Passport'>
            Паспорт государства Бубунда
        </option>
          <option
            className={styles.inputOption}
            value='Driving'>
            Водительское удостоверение
        </option>
          <option
            className={styles.inputOption}
            value='Licence'>
            Лицензия на отлов крокодилов
        </option>
        </select>
        <button
          className={styles.button}
          type='submit'>
          Хочу!
      </button>
      </form>
    </CSSTransition>
  )
}

export default ChooseDocType;

ChooseDocType.propTypes = {
  selectedDocument: PropTypes.string.isRequired,
  selectDocument: PropTypes.func.isRequired
}