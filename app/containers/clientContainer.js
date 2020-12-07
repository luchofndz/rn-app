import { connect } from 'react-redux';
import { ClientView } from '../components/client/clientView';
import { getUserDataRedux, getUserImageRedux } from '../selectors/userSelectors';

const mapStateToProps = (state) => ({
  userData: getUserDataRedux(state),
  userImage: getUserImageRedux(state)
});

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ClientContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientView);

export default ClientContainer;
