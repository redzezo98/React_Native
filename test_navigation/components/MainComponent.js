import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity
} from 'react-native';
import App from '../index';

export default class MainComponent extends React.Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'dodgerblue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Main screen
                </Text>
                <TouchableOpacity style={{
                    padding: 10, 
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: 'darkviolet',
                    fontSize: 18,
                    color: 'white'
                }}
                    onPress={()=>{
                        navigation.navigate('Details');
                    }}
                >
                    Navigate to Details
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 10, 
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor: 'darkviolet',
                    fontSize: 18,
                    color: 'white'
                }}
                    onPress={()=>{
                        navigation.navigate('Third');
                    }}>
                    Navigate to Third
                </TouchableOpacity>
            </View>
        );
    }
}
