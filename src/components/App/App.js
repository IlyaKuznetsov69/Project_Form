import React from 'react';
import PropTypes from 'prop-types';

import ChooseDocType from 'ChooseDocType/ChooseDocType';
import ClientData from 'ClientData/ClientData';
import UserDocument from 'UserDocument/UserDocument';
import styles from 'App/App.scss';

const App = ({
  clientData,
  photo,
  selectedDocument,
  addClientData,
  removeClientData,
  selectDocument,
  removePhoto,
  showWarning,
  clearAllWarnings }) => {

  return (
    <div>
      <section className={styles.leftSection}>
        <header>
          <h1 className={styles.header}>Application form to the Bubunda state passport department</h1>
        </header>
        <ChooseDocType
          selectDocument={selectDocument}
          selectedDocument={selectedDocument}
        />
        <ClientData
          addClientData={addClientData}
          removeClientData={removeClientData}
          clientData={clientData}
          removePhoto={removePhoto}
          showWarning={showWarning}
          clearAllWarnings={clearAllWarnings}
        />
      </section>
      <section className={styles.rightSection}>
        <header>
          <h1 className={styles.header}>Вот какой красивый документ вы получите, если нам заплатите:)</h1>
        </header>
        <UserDocument
          clientData={clientData}
          photo={photo}
          selectedDocument={selectedDocument}
        />
      </section>
    </div>
  )
}

export default App;

App.propTypes = {
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
  selectedDocument: PropTypes.string.isRequired,
  addClientData: PropTypes.func.isRequired,
  removeClientData: PropTypes.func.isRequired,
  selectDocument: PropTypes.func.isRequired,
  removePhoto: PropTypes.func.isRequired,
  showWarning: PropTypes.func.isRequired,
  clearAllWarnings: PropTypes.func.isRequired
};

App.defaultProps = {
  photo: undefined,
};