import { connect } from 'react-redux';

import App from '../components/App/App';
import {
  addClientData,
  removeClientData,
  selectDocument,
  removePhoto,
  removeWarning } from '../actions/actions';

const mapStateToProps = ({ clientData, photo, selectedDocument }) => ({
  clientData: clientData,
  photo: photo.url,
  selectedDocument: selectedDocument
})

const verifyData = ({
  surname,
  name,
  lastname,
  birthdate,
  motherland,
  idNumber,
  email }) => {
  const validData = {};
  const invalidData = {};
  if (surname && surname.match(/^\s*[a-zа-яё]+\s*$/i)) {
    validData.surname = surname.match(/[a-zа-яё]+/i)[0].toUpperCase();
  } else {
    validData.surname = undefined;
    invalidData.surname = 'Введите Вашу Фамилию без лишних символов и пробелов!';
  }
  if (name && name.match(/^\s*[a-zа-яё]+\s*$/i)) {
    validData.name = name.match(/[a-zа-яё]+/i)[0].toUpperCase();
  } else {
    validData.name = undefined;
    invalidData.name = 'Введите Ваше Имя без лишних символов и пробелов!';
  }
  if (lastname && lastname.match(/^\s*[a-zа-яё]+\s*$/i)) {
    validData.lastname = lastname.match(/[a-zа-яё]+/i)[0].toUpperCase();
  } else {
    validData.lastname = undefined;
    invalidData.lastname = '!';
  }
  if (birthdate && birthdate.match(/^\s*\d\d\.\d\d\.\d{4}\s*$/)) {
    validData.birthdate = birthdate.match(/\d\d\.\d\d\.\d{4}/)[0];
  } else {
    validData.birthdate = undefined;
    invalidData.birthdate = 'Введите Вашу дату рождения в формате DD.MM.YYYY';
  }
  if (motherland && motherland.match(/^\s*[a-zа-яё\s]+\s*$/i)) {
    validData.motherland = motherland.match(/[a-zа-яё]+/ig).join(' ').toUpperCase();
  } else {
    validData.motherland = undefined;
    invalidData.motherland = 'Введите Родину-Мать без лишних символов!';
  }
  if (idNumber && idNumber.match(/^\s*\d{4}\s+\d{6}\s*$/)) {
    validData.idNumber = idNumber.match(/\d+/g).join(' ');
  } else {
    validData.idNumber = undefined;
    invalidData.idNumber = 'Введите номер Вашего паспорта в формате XXXX XXXXXX';
  }
  if (email && email.match(/^\s*[\w\-.]+@\w+\.\w+\s*$/)) {
    validData.email = email.match(/[\w\-.]+@\w+\.\w+/)[0];
  } else {
    validData.email = undefined;
    invalidData.email = 'Введите Ваш Email-адрес в формате xxxxx@xxxx.xx';
  }
  validData.invalidData = invalidData;
  return validData;
}

const mapDispatchToProps = (dispatch) => ({
  addClientData: (inputData) => dispatch(addClientData(verifyData(inputData))),
  removeClientData: () => dispatch(removeClientData()),
  selectDocument: (document) => dispatch(selectDocument(document)),
  removePhoto: () => dispatch(removePhoto()),
  removeWarning: (name) => dispatch(removeWarning(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);