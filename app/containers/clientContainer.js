import { connect } from 'react-redux';
import { ClientView } from '../components/client/clientView';
import { getUserData } from '../actions/userActions';
import { getUserDataRedux } from '../selectors/userSelectors';

const mapStateToProps = (state) => ({
  userData: getUserDataRedux(state),
});

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ClientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientView);

export default ClientContainer;
