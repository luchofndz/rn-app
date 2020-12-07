import { connect } from 'react-redux';
import { LogoutView } from '../components/logout/logoutView';
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
