import { combineReducers } from 'redux';

import handleClientData from './handleClientData';
import selectDocument from './selectDocument';
import handlePhoto from './handlePhoto';
import handleWarning from './handleWarning';

const mainReducer = combineReducers({
  clientData: handleClientData,
  photo: handlePhoto,
  selectedDocument: selectDocument,
  warnings: handleWarning
});

export default mainReducer;