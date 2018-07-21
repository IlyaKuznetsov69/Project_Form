export const addClientData = ({
  surname,
  name,
  lastname,
  birthdate,
  motherland,
  idNumber,
  email,
  invalidData }) => ({
    type: 'ADD_CLIENTDATA',
    payload: {
      surname,
      name,
      lastname,
      birthdate,
      motherland,
      idNumber,
      email,
      invalidData
    }
  });

export const addPhoto = ({ name, url }) => ({
  type: 'ADD_PHOTO',
  payload: {
    name,
    url
  }
});

export const removeClientData = () => ({
  type: 'REMOVE_CLIENTDATA'
});

export const removePhoto = () => ({
  type: 'REMOVE_PHOTO'
});

export const removeWarning = (name) => ({
  type: 'REMOVE_WARNING',
  payload: {
    name
  }
});

export const selectDocument = (document) => ({
  type: 'SELECT_DOCUMENT',
  payload: {
    document
  }
});