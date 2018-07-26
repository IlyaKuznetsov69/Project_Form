export const addClientData = (inputData) => ({
    type: 'ADD_CLIENTDATA',
    payload: inputData
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

export const showWarning = (name) => ({
  type: 'SHOW_WARNING',
  payload: {
    name
  }
})

export const clearWarning = (name) => ({
  type: 'CLEAR_WARNING',
  payload: {
    name
  }
})

export const clearAllWarnings = () => ({
  type: 'CLEAR_ALL'
})