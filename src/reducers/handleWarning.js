const handleWarning = (state = {
  surname: false,
  name: false,
  lastname: false,
  birthdate: false,
  motherland: false,
  idNumber: false,
  email: false }, { type, payload }) => {
  switch (type) {
    case 'SHOW_WARNING': {
      const { name } = payload;  
      return { ...state, [name]: true}
    }
    case 'CLEAR_WARNING': {
      const { name } = payload;  
      return { ...state, [name]: false}
    }
    case 'CLEAR_ALL':
      return Object.assign({}, state, {
        surname: false,
        name: false,
        lastname: false,
        birthdate: false,
        motherland: false,
        idNumber: false,
        email: false });
    default:
      return state;
  }
}

export default handleWarning;