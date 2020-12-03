import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';

export default class loginManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RightID: '',
            RightPassword: '',
        };
    }
    render() {
        return (
            <ScrollView style={{backgroundColor: '#ffffff'}}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image
                            style={styles.avt}
                            source={require('../images/manager.jpg')}
                        />
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.viewInputID}>
                            <View style={styles.viewtextLogo}>
                                <Image
                                    style={styles.textLogo}
                                    source={require('../images/user_login.png')}></Image>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({ RightID: text })}
                                keyboardType="email-address"
                                placeholder="Enter your ID"
                                //autoFocus={true}
                            />
                        </View>
                        <View style={styles.viewInputPassword}>
                            <View style={styles.viewtextLogo}>
                                <Image
                                    style={styles.textLogo}
                                    source={require('../images/user_login.png')}></Image>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({ RightPassword: text })}
                                secureTextEntry={true}
                                placeholder="Enter your Password"
                            />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                            <TouchableOpacity  style={styles.login}
                            onPress={()=>{
                                alert('hello');
                            }}>
                                <Text style={styles.loginButton} >
                                    Login
                                </Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',

    },
    top: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle: {
        flex: 2,
        backgroundColor: '#ffffff'
    },
    bottom: {
        flexDirection: 'column',
        flex: 3,
        backgroundColor: '#ffffff'
    },
    avt: {
        marginTop: 30,
        width: 100,
        height: 100,
    },
    viewInputID: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'gray',
    },
    viewInputPassword: {
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 20,
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'gray',
    },
    textInput: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewtextLogo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    login: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#63B3ED',
        width: '70%',
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
    },
    loginButton: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 15,
    }
});
