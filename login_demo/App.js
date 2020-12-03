/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput,
    Image, TouchableOpacity
} from 'react-native'



type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            behavior: 'position' 
      // there is three ways to adjust (position , height , padding )
        }
    }

    clickButton = () => {
        alert();
    };

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.top}>
                    <Image
                        style={styles.Logo}
                        source={require('./chelsea.png')}
                    />
                </View>
                <View style={styles.middle}>
                    <View style={styles.inputID}>
                        <TextInput
                            keyboardType="email-address"
                            placeholder="Enter your ID"
                            autoFocus={true}
                            windowSoftInputMode="adjustPan"
                        />
                    </View>
                    <View style={styles.inputPassword}>
                        <TextInput
                            placeholder="Enter your Password"
                            secureTextEntry={true}
                            activeOpacity={0.5}
                        />
                    </View>

                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        onPress={this.clickButton}
                        style={styles.LoginOne}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#B0E2FF"
    },
    Logo: {
        //backgroundColor: "black",
        height: 100,
        width: 100,
        margin: 15,
        marginLeft: 150,
        marginTop: 20,
        alignItems: "center",
    },
    inputID: {
        height: "30%",
        margin: 20,
        padding: 10,
        borderColor: "black",
        borderWidth: 2
    },
    inputPassword: {
        height: "30%",
        marginTop: 10,
        margin: 20,
        padding: 10,
        borderColor: "black",
        borderWidth: 2
    },
    LoginOne: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "steelblue",
        padding: 15,
        height: 50,
        width: 250,
        marginTop: 30,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    middle: {
        flex: 3
    },
    top: {
        flex: 2
    },
    bottom: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "center"

    }
});

