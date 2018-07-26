const handleClientData = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_CLIENTDATA': {
      const inputInvalidData = { ...payload.invalidData };
      const { invalidData } = state;
      const newInvalidData = Object.assign({}, invalidData, inputInvalidData);
      return Object.assign({}, state, payload, {invalidData: newInvalidData});
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