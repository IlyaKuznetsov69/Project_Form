import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import drivingPhoto from 'images/drivingPhoto.png';
import licencePhoto from 'images/licencePhoto.png';
import passportPhoto from 'images/passportPhoto.png';
import styles from './UserDocument.css';

class UserDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDoc: this.props.selectedDocument,
      documentActive: '',
      currentPhoto: this.props.photo,
      photoActive: ''
    }

    this.switchDocument = this.switchDocument.bind(this);
    this.changeCurrentDoc = this.changeCurrentDoc.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedDocument !== prevProps.selectedDocument) {
      this.setState({
        documentActive: styles.documentActive
      })
    } else if (this.props.photo !== prevProps.photo) {
      this.setState({
        photoActive: styles.photoActive
      })
    }
  }

  changeCurrentDoc() {
    this.setState({
      currentDoc: this.props.selectedDocument,
      documentActive: ''
    })
  }

  changePhoto() {
    this.setState({
      currentPhoto: this.props.photo,
      photoActive: ''
    })
  }

  formatDate() {
    const { clientData } = this.props;
    let formattedDate = '';
    if (clientData && clientData.birthdate) {
      formattedDate = clientData.birthdate.match(/\d+/g).reverse().join('.');
      return formattedDate;
    } return null;
  }

  switchDocument(currentDoc) {

    switch (currentDoc) {
      case 'Driving':
        return {
          header: 'DRIVING LICENCE',
          photo: drivingPhoto,
          background: styles.driving,
          stamp: styles.passportStamp,
          holo: styles.licenceHolo,
          color: styles.drivingColor
        }
      case 'Licence':
        return {
          header: 'CROCODILE HUNTING LICENCE',
          photo: licencePhoto,
          background: styles.licence,
          stamp: styles.licenceStamp,
          holo: styles.licenceHolo,
          color: styles.licenceColor
        }
      case 'Passport':
      default:
        return {
          header: 'BUBUNDA STATE PASSPORT',
          photo: passportPhoto,
          background: styles.passport,
          stamp: styles.passportStamp,
          holo: styles.passportHolo,
          color: styles.passportColor
        }
    }
  }

  render() {

    const { clientData } = this.props;
    const { invalidData } = clientData;
    const {
      currentPhoto,
      currentDoc,
      documentActive,
      photoActive } = this.state;

    return (
      <CSSTransition
        in
        classNames={{
          appear: styles.documentAppear,
          appearActive: styles.documentAppearActive,
          enter: styles.documentEnter,
          enterActive: styles.documentEnterActive,
          enterDone: styles.document
        }}
        appear
        timeout={1100}
      >
        <div
          className={[
            styles.document,
            this.switchDocument(currentDoc).background,
            documentActive].join(' ')}
          onTransitionEnd={this.changeCurrentDoc}
        >
          <div className={styles.documentBox}>
            <h2
              className={[
                styles.header,
                this.switchDocument(currentDoc).color].join(' ')}
            >
              {this.switchDocument(currentDoc).header}
            </h2>
            <div
              className={[
                styles.imageBox,
                this.switchDocument(currentDoc).color].join(' ')}
            >
              <img
                className={[styles.photo, photoActive].join(' ')}
                src={currentPhoto || this.switchDocument(currentDoc).photo}
                onTransitionEnd={this.changePhoto}
                alt='Ваше фото'
                width='100%'
                height='100%'
              />
            </div>
            <div className={this.switchDocument(currentDoc).color}>
              <div className={styles.clientData}>
                <span className={styles.title}>Surname:</span>
                <span className={styles.data}>
                  {clientData && clientData.surname ||
                    invalidData && ' ' ||
                    'XXXXXXXXXX'}
                </span>
              </div>
              <div className={styles.clientData}>
                <span className={styles.title}>Firstname:</span>
                <span className={styles.data}>
                  {clientData && clientData.name ||
                    invalidData && ' ' ||
                    'XXXXXXXXXX'}
                </span>
              </div>
              <div className={styles.clientData}>
                <span className={styles.title}>Lastname:</span>
                <span className={styles.data}>
                  {clientData && clientData.lastname ||
                    invalidData && ' ' ||
                    'XXXXXXXXXX'}
                </span>
              </div>
              <div className={styles.clientData}>
                <span className={styles.title}>Date of birth:</span>
                <span className={styles.data}>
                  {this.formatDate() ||
                    invalidData && ' ' ||
                    'XX.XX.XXXX'}
                </span>
              </div>
              <div className={styles.clientData}>
                <span className={styles.title}>Place of birth:</span>
                <span className={styles.data}>
                  {clientData && clientData.motherland ||
                    invalidData && ' ' ||
                    'XXXXXXXXXX'}
                </span>
              </div>
            </div>
            <div className={styles.emailBox}>
              <span>
                If You find this document, please contact:
              </span>
              <span className={styles.email}>
                {clientData.email || 'gadukino@mymail.xyz'}
              </span>
            </div>
            <div className={styles.number}>
              {clientData.idNumber || '0000  000000'}
            </div>
            <div
              className={[
                styles.stamp,
                this.switchDocument(currentDoc).stamp].join(' ')}
            />
            <div
              className={[
                styles.holo,
                this.switchDocument(currentDoc).holo].join(' ')}
            />
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default UserDocument;

UserDocument.propTypes = {
  clientData: PropTypes.shape({
    surname: PropTypes.string,
    name: PropTypes.string,
    lastname: PropTypes.string,
    birthdate: PropTypes.string,
    motherland: PropTypes.string,
    idNumber: PropTypes.string,
    email: PropTypes.string,
    invalidData: PropTypes.shape({
      surname: PropTypes.string,
      name: PropTypes.string,
      birthdate: PropTypes.string,
      motherland: PropTypes.string,
      idNumber: PropTypes.string,
      email: PropTypes.string
    })
  }).isRequired,
  photo: PropTypes.string,
  selectedDocument: PropTypes.string.isRequired
}

UserDocument.defaultProps = {
  photo: undefined
}