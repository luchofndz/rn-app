import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginContainer from '../containers/loginContainer';
import MapView from '../components/map/mapView';
import ClientContainer from '../containers/clientContainer';


const MainStack = createStackNavigator({
  login: {
    screen: LoginContainer,
    navigationOptions: () => ({
      header: null
    }),
  },
  client: {
    screen: ClientContainer,
    navigationOptions: () => ({
      header: null
    }),
  },
  map: {
    screen: MapView,
    navigationOptions: () => ({
      header: null
    }),
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
