import React, { Component } from 'react';
import {
    AppRegistry,
    SectionList,
    StyleSheet,
    Text,
    View,
    Alert,
    Platformc,
    NativeModules,
  NativeEventEmitter 
} from 'react-native';

async function getTeamfromSever() {
    fetch('http://127.0.0.1:5000/demo1')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
        })
        .catch((error) => {
            
            console.error(error);
        });
}

export { getTeamfromSever };
