import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BasicFlatList from './components/BasicFlatList';
import ChelseaScreen from './ChelseaScreen';
import Member from './components/Member'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RightID: '',
      RightPassword: '',
    };
  }

  static navigationOptions = {
    headerShown : false,

    headerMode: 'none'
  }
  render() {
      
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image style={styles.Logo} source={require('./Pre.png')} />
          </View>
          <View style={styles.middle}>
            <View style={styles.inputID}>
              <TextInput
                onChangeText={(text) => this.setState({RightID: text})}
                keyboardType="email-address"
                placeholder="Enter your ID"
                autoFocus={true}
              />
            </View>
            <View style={styles.inputPassword}>
              <TextInput
                onChangeText={(text) => this.setState({RightPassword: text})}
                placeholder="Enter your Password"
                secureTextEntry={true}
                activeOpacity={0.5}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.RightID != 'admin' ||
                  this.state.RightPassword != 'admin'
                ) {
                  alert('Wrong Id or password, please try again!');
                  return;
                } else {
                  this.props.navigation.navigate('Details');
                }
              }}
              style={styles.LoginOne}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: BasicFlatList,
    Chelsea: ChelseaScreen,
    Mem: Member
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerShown : false,
      headerMode: 'none'
    }
  },
  
);

const AppContainer = createAppContainer(AppNavigator);

const style_2 = StyleSheet.create({
  FlatListItemName: {
    color: 'white',
    paddingTop: 30,
    fontSize: 18,
  },
  FlatListItem: {
    color: 'white',
    paddingTop: 10,
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#B0E2FF',
  },
  Logo: {
    //backgroundColor: "black",
    height: 100,
    width: 300,
    margin: 15,
    marginLeft: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  inputID: {
    height: '30%',
    margin: 20,
    padding: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
  },
  inputPassword: {
    height: '30%',
    marginTop: 10,
    margin: 20,
    padding: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
  },
  LoginOne: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    padding: 15,
    height: 50,
    width: 150,
    marginTop: 30,
    borderRadius: 5,
  },
  middle: {
    flex: 3,
    flexDirection: 'column',
  },
  top: {
    flex: 2,
  },
  bottom: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
