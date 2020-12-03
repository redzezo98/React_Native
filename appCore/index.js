/**
 * @format
 */

import {AppRegistry} from 'react-native';
import welcome from './components/welcome';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => welcome);
