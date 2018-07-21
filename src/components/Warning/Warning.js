import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Warning.css';

const Warning = ({ invalidData, removeWarning, name }) => {

  const show = invalidData ? true : false;

  const content = (invalidData) => {
    if (invalidData) {
      return (
        <div className={styles.box}>
          <div className={styles.arrow}></div>
          <div className={styles.warning}>
            Achtung!!! {invalidData}
            <button
              className={styles.close}
              onClick={() => removeWarning(name)}>
              X
            </button>
          </div>
        </div>
      )
    } return <div />;
  }

  return (
    <CSSTransition
      in={show}
      classNames={{
        appear: styles.boxAppear,
        appearActive: styles.boxAppearActive,
        enter: styles.boxEnter,
        enterActive: styles.boxEnterActive,
        enterDone: styles.box,
        exit: styles.boxExit,
        exitActive: styles.boxExitActive
      }}
      timeout={300}
      key={name}
      unmountOnExit>
      {content(invalidData)}
    </CSSTransition>
  )
}

export default Warning;

Warning.propTypes = {
  invalidData: PropTypes.string,
  removeWarning: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}