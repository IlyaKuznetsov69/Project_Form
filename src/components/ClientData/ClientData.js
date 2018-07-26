import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import InputField from 'InputField/InputField';
import InputFileContainer from 'containers/InputFileContainer';
import styles from './ClientData.scss';

class ClientData extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    const { addClientData } = this.props;
    addClientData({ name, value });
  }

  removeAll() {
    const { removeClientData, removePhoto, clearAllWarnings } = this.props;
    removeClientData();
    removePhoto();
    clearAllWarnings();
  }

  render() {
    const { clientData, showWarning } = this.props;

    return (
      <CSSTransition
        in
        classNames={{
          appear: styles.formAppear,
          appearActive: styles.formAppearActive,
          enter: styles.formEnter,
          enterActive: styles.formEnterActive,
          enterDone: styles.form
        }}
        appear
        timeout={800}
      >
        <form
          className={styles.form}
          action='#'
          autoComplete='on'
        >
          <h4 className={styles.header}>
            Сюда чуть-чуть заполним:
          </h4>
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Ваша Фамилия:'
            name='surname'
            title='Что-то типа Иванов'
            requiredfield
            showWarning={showWarning}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Ваше Имя:'
            name='name'
            title='Наверное Иван'
            requiredfield
            showWarning={showWarning}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Ваше Отчество (если есть):'
            name='lastname'
            title='Ну если забыли, ничего страшного'
            requiredfield={false}
            showWarning={showWarning}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Дата рождения вот в таком виде:'
            name='birthdate'
            title='Точки расставте правильно'
            requiredfield
            placeholder='DD.MM.YYYY'
            type='date'
            showWarning={showWarning}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Родина Мать:'
            name='motherland'
            title='Помните Родину, Мать Вашу!'
            requiredfield
            showWarning={showWarning}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Серия и номер паспорта (который есть):'
            name='idNumber'
            title='Набираем номерок...'
            requiredfield
            placeholder='XXXX XXXXXX'
            showWarning={showWarning}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            text='Email для связи:'
            name='email'
            title='Сюда Email свой'
            requiredfield
            placeholder='xxxxxx@xxxx.xx'
            type='email'
            showWarning={showWarning}
          />
          <InputFileContainer />
          <div className={styles.buttonBox}>
            <button
              className={styles.button}
              type='reset'
              title='Вообще лучше не нажимать'
              onClick={this.removeAll}
            >
              Очистить
            </button>
          </div>
          <span className={styles.notation}>
            * это как бы заполнить надо
          </span>
        </form>
      </CSSTransition>
    )
  }
}

export default ClientData;

ClientData.propTypes = {
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
  addClientData: PropTypes.func.isRequired,
  removeClientData: PropTypes.func.isRequired,
  removePhoto: PropTypes.func.isRequired,
  showWarning: PropTypes.func.isRequired,
  clearAllWarnings: PropTypes.func.isRequired
}