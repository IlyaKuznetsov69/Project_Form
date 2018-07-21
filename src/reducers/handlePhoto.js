const handlePhoto = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_PHOTO': 
      return Object.assign({}, state, payload);
    case 'REMOVE_PHOTO':
      return {};
    default:
      return state;
  }
}

export default handlePhoto;