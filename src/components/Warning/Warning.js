import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Warning.css';

const Warning = ({
  removeWarning,
  clearWarning,
  invalidData,
  warnings,
  name,
  requiredfield }) => {

  const show = (requiredfield && warnings[name] && invalidData && invalidData[name]) ? true : false;

  const clear = () => {
    removeWarning(name);
    clearWarning(name);
  }

  const content = () => {
    if (show) {
      return (
        <div className={styles.box}>
          <div className={styles.arrow} />
          <div className={styles.warning}>
            Achtung!!! {invalidData[name]}
            <button
              type="button"
              className={styles.close}
              onClick={() => clear()}
            >
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
      unmountOnExit
    >
      {content()}
    </CSSTransition>
  )
}

export default Warning;

Warning.propTypes = {
  requiredfield: PropTypes.bool.isRequired,
  removeWarning: PropTypes.func.isRequired,
  clearWarning: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  warnings: PropTypes.shape({
    surname: PropTypes.bool.isRequired,
    name: PropTypes.bool.isRequired,
    lastname: PropTypes.bool.isRequired,
    birthdate: PropTypes.bool.isRequired,
    motherland: PropTypes.bool.isRequired,
    idNumber: PropTypes.bool.isRequired,
    email: PropTypes.bool.isRequired
  }).isRequired,
  invalidData: PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string,
    birthdate: PropTypes.string,
    motherland: PropTypes.string,
    idNumber: PropTypes.string,
    email: PropTypes.string
  })
}

Warning.defaultProps = {
  invalidData: undefined
}