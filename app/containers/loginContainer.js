import { connect } from 'react-redux';
import { LoginView } from '../components/login/loginView';
import { getUserData } from '../actions/userActions';
import { getUserDataRedux } from '../selectors/userSelectors';

const mapStateToProps = (state) => ({
  userData: getUserDataRedux(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (value) => {
      dispatch(getUserData(value));
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default LoginContainer;
