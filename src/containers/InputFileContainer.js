import { connect } from 'react-redux';

import InputFile from 'InputFile/InputFile';
import { addPhoto } from 'actions/actions';

const verifyPhoto = (inputPhoto) => {
  const { name } = inputPhoto;
  let imageName = null;
  if (name && name.match(/(png|jpg|svg)$/i)) {
    imageName = name.match(/[^\\]+$/)[0];
    return { ...inputPhoto, name: imageName}
  } return {};
}

const mapStateToProps = ({ photo }) => ({
  photo: photo.name
})

const mapDispatchToProps = (dispatch) => ({
  addPhoto: (inputPhoto) => dispatch(addPhoto(verifyPhoto(inputPhoto)))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputFile);