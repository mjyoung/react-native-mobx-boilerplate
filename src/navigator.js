import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';

const Navigator = StackNavigator({
  Main: { screen: MainScreen },
  Second: { screen: SecondScreen }
});

export default Navigator;
