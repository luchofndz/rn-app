import { connect } from 'react-redux';
import { FormView } from '../components/form/formView';
import { setUserImage } from '../actions/userActions';
import { getUserImageRedux } from '../selectors/userSelectors';

const mapStateToProps = (state) => ({
  userImage: getUserImageRedux(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserImage: (value) => {
      dispatch(setUserImage(value));
    },
  };
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormView);

export default FormContainer;
