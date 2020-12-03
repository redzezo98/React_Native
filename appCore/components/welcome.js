import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import slection from './slection'
import loginManager from './loginManager'

class welcomeMain extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.next}
                onPress={()=>{
                    this.props.navigation.navigate('Selection');
                }}
                >
                    <Image
                        source={require('../images/logo_1.png')}
                        style={styles.logo}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.slogan}>Last Minutes</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: welcomeMain,
        Selection: slection,
        loginM: loginManager,
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        marginTop: 50,
        marginLeft: 50,
        width: 300,
        height: 300,
    },
    slogan: {
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginLeft: 150
    }
});

export default class welcome extends React.Component {
    render() {
        return <AppContainer />;
    }
}