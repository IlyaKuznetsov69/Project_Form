import { combineReducers } from 'redux';

import handleClientData from './handleClientData';
import selectDocument from './selectDocument';
import handlePhoto from './handlePhoto';

const mainReducer = combineReducers({
  clientData: handleClientData,
  photo: handlePhoto,
  selectedDocument: selectDocument
});

export default mainReducer;