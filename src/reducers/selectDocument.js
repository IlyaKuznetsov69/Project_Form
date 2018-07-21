const selectDocument = (state = 'Passport', { type, payload }) => {
  switch (type) {
    case 'SELECT_DOCUMENT': {
      const { document } = payload;
      return state = document;
    }
    default:
      return state;
  }
}

export default selectDocument;