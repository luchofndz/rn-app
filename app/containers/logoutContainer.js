import { connect } from 'react-redux';
import { LogoutView } from '../components/logout/logoutView';
import { getUserData } from '../actions/userActions';
import { getUserDataRedux } from '../selectors/userSelectors';
import { setUserData } from '../actions/userActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (value) => {
      dispatch(setUserData(value));
    },
  };
};

const LogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutView);

export default LogoutContainer;
