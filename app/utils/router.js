import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginContainer from '../containers/loginContainer';
import MapsView from '../components/map/mapView';
import ClientContainer from '../containers/clientContainer';
import FormView from '../components/form/formView'


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
    screen: FormView,
    navigationOptions: () => ({
      headerShown: false
    }),
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
