const handleClientData = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_CLIENTDATA': {
      const {
        surname,
        name,
        lastname,
        birthdate,
        motherland,
        idNumber,
        email,
        invalidData } = payload;
      return Object.assign({}, state,
        {
          surname: surname,
          name: name,
          lastname: lastname,
          birthdate: birthdate,
          motherland: motherland,
          idNumber: idNumber,
          email: email,
          invalidData: invalidData
        })
    }
    case 'REMOVE_CLIENTDATA':
      return {};
    case 'REMOVE_WARNING': {
      const { name } = payload;
      const { invalidData } = state;
      const newInvalidData = Object.assign({}, invalidData, {[name]: undefined});
      return Object.assign({}, state, {invalidData: newInvalidData});
    }
    default:
      return state;
  }
}

export default handleClientData;