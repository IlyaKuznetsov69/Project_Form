import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './ClientData.css';

import InputField from '../InputField/InputField.js';
import InputFileContainer from '../../containers/InputFileContainer.js';

class ClientData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: { ...this.props.clientData }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  handleChange(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    let inputData = { ...this.state.inputData };
    inputData[name] = value;
    this.setState({ inputData });
    // console.log('1', this.state.inputData);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { inputData } = this.state;
    const { addClientData } = this.props;
    addClientData(inputData);
  }

  removeAll() {
    const { removeClientData, removePhoto } = this.props;
    removeClientData();
    removePhoto();
  }

  render() {

    const { clientData, removeWarning } = this.props;

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
        timeout={800}>
        <form
          className={styles.form}
          action='#'
          autoComplete='on'
          onSubmit={this.handleSubmit}
        >
          <h4 className={styles.header}>
            Сюда чуть-чуть заполним:
          </h4>
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Ваша Фамилия:'
            name='surname'
            title='Что-то типа Иванов'
            required={true}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Ваше Имя:'
            name='name'
            title='Наверное Иван'
            required={true}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Ваше Отчество (если есть):'
            name='lastname'
            title='Ну если забыли, ничего страшного'
            required={false}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Дата рождения вот в таком виде:'
            name='birthdate'
            title='Точки расставте правильно'
            required={true}
            placeholder='DD.MM.YYYY'
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Родина Мать:'
            name='motherland'
            title='Помните Родину, Мать Вашу!'
            required={true}
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Серия и номер паспорта (который есть):'
            name='idNumber'
            title='Набираем номерок...'
            required={true}
            placeholder='XXXX XXXXXX'
          />
          <InputField
            clientData={clientData}
            handleChange={this.handleChange}
            removeWarning={removeWarning}
            text='Email для связи:'
            name='email'
            title='Сюда Email свой'
            required={true}
            placeholder='xxxxxx@xxxx.xx'
            type='email'
          />
          <InputFileContainer />
          <div className={styles.buttonBox}>
            <button
              className={styles.button}
              // onClick={this.handleSubmit}
              type='submit'
              title='Эту пимпу жмите, когда все заполнили'>
              Ну, я все заполнил.
            </button>
            <button
              className={styles.button}
              type='reset'
              title='Вообще лучше не нажимать'
              onClick={this.removeAll}>
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
  removeWarning: PropTypes.func.isRequired
}