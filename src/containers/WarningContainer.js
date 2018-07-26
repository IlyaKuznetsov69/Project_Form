import { connect } from 'react-redux';

import Warning from 'Warning/Warning';
import { removeWarning, clearWarning } from 'actions/actions';

const mapStateToProps = ({ clientData, warnings }) => ({
  invalidData: clientData.invalidData,
  warnings: warnings
})

const mapDispatchToProps = (dispatch) => ({
  removeWarning: (name) => dispatch(removeWarning(name)),
  clearWarning: (name) => dispatch(clearWarning(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Warning);