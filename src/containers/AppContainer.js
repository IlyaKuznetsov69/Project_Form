import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from 'App/App';
import * as actionCreators from 'actions/actions';
import messages from 'constants/constants';

const verifyData = ({ name, value }) => {
  const validData = {};
  const invalidData = {};
  switch (name) {
    case 'surname': {
      if (value.match(/^\s*[a-zа-яё]+\s*$/i)) {
        validData.surname = value.match(/[a-zа-яё]+/i)[0].toUpperCase();
        invalidData.surname = undefined;
      } else {
        validData.surname = undefined;
        invalidData.surname = messages.surname;
      } break;
    }
    case 'name': {
      if (value.match(/^\s*[a-zа-яё]+\s*$/i)) {
        validData.name = value.match(/[a-zа-яё]+/i)[0].toUpperCase();
        invalidData.name = undefined;
      } else {
        validData.name = undefined;
        invalidData.name = messages.name;
      } break;
    }
    case 'lastname': {
      if (value.match(/^\s*[a-zа-яё]+\s*$/i)) {
        validData.lastname = value.match(/[a-zа-яё]+/i)[0].toUpperCase();
        invalidData.lastname = undefined;
      } else {
        validData.lastname = undefined;
        invalidData.lastname = messages.lastname;
      } break;
    }
    case 'birthdate': {
      if (value.match(/^\s*\d{4}-\d\d-\d\d\s*$/)) {
        validData.birthdate = value.match(/\d{4}-\d\d-\d\d/)[0];
        invalidData.birthdate = undefined;
      } else {
        validData.birthdate = undefined;
        invalidData.birthdate = messages.birthdate;
      } break;
    }
    case 'motherland': {
      if (value.match(/^\s*[a-zа-яё\s]+\s*$/i)) {
        validData.motherland = value.match(/[a-zа-яё]+/ig).join(' ').toUpperCase();
        invalidData.motherland = undefined;
      } else {
        validData.motherland = undefined;
        invalidData.motherland = messages.motherland;
      } break;
    }
    case 'idNumber': {
      if (value.match(/^\s*\d{4}\s+\d{6}\s*$/)) {
        validData.idNumber = value.match(/\d+/g).join(' ');
        invalidData.idNumber = undefined;
      } else {
        validData.idNumber = undefined;
        invalidData.idNumber = messages.idNumber;
      } break;
    }
    case 'email': {
      if (value.match(/^\s*[\w\-.]+@\w+\.\w+\s*$/)) {
        validData.email = value.match(/[\w\-.]+@\w+\.\w+/)[0];
        invalidData.email = undefined;
      } else {
        validData.email = undefined;
        invalidData.email = messages.email;
      }
    }
  }
  validData.invalidData = invalidData;
  return validData;
}

const mapStateToProps = ({ clientData, photo, selectedDocument }) => ({
  clientData: clientData,
  photo: photo.url,
  selectedDocument: selectedDocument
})

const mapDispatchToProps = (dispatch) => {
  const {
    addClientData,
    removeClientData,
    selectDocument,
    removePhoto,
    showWarning,
    clearAllWarnings } = bindActionCreators(actionCreators, dispatch);
  return {
    addClientData: (inputData) => addClientData(verifyData(inputData)),
    removeClientData: () => removeClientData(),
    selectDocument: (document) => selectDocument(document),
    removePhoto: () => removePhoto(),
    showWarning: (name) => showWarning(name),
    clearAllWarnings: () => clearAllWarnings()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);