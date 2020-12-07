import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginContainer from '../containers/loginContainer';
import MapsView from '../components/map/mapView';
import ClientContainer from '../containers/clientContainer';
import FormContainer from '../containers/formContainer'
import LogoutContainer from '../containers/logoutContainer';


const MainStack = createStackNavigator({
  login: {
    screen: LoginContainer,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
  client: {
    screen: ClientContainer,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
  map: {
    screen: MapsView,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
  form: {
    screen: FormContainer,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
  logout: {
    screen: LogoutContainer,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
