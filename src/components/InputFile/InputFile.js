import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './InputFile.css';

class InputFile extends Component {
  constructor(props) {
    super(props);

    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handlePhoto(event) {

    event.preventDefault();
    const { addPhoto } = this.props;
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    const name = event.currentTarget.value;

    reader.onloadend = () => {
      const url = reader.result;
      addPhoto({
        name: name,
        url: url
      });
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {

    const { photo } = this.props;

    return (
      <div>
        <span>
          Фото, как на памятник:
        </span>
        <label
          className={[styles.fileInput, styles.inputLabel].join(' ')}
          title='Если у вас нет, у нас есть красивое'
        >
          {photo || 'Выберите фото'}
          <input
            className={styles.inputTypeFile}
            type='file'
            name="photo"
            accept='image/*'
            onChange={this.handlePhoto}
          />
        </label>
      </div>
    )
  }
}

export default InputFile;

InputFile.propTypes = {
  addPhoto: PropTypes.func.isRequired,
  photo: PropTypes.string
}

InputFile.defaultProps = {
  photo: undefined
}