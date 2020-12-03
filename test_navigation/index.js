/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
//import App from './App';
import { name as appName } from './app.json';

import DetailsComponent from './components/DetailsComponent';
import ThirdComponent from './components/ThirdComponent';
import MainComponent from './components/MainComponent';
import { ThirdScreen } from './ScreenName';
//import { Mainscreen, DetailsScreen, ThirdScreen} from './ScreenName';
const App = StackNavigator(
    {
        Main: MainComponent,
        Details: DetailsComponent,
        Third: ThirdComponent
    },
    {
        initialRouteName: 'Main'
    }
);

const AppContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => App);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
