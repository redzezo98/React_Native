import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Dimensions, Image, TouchableOpacity
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
export default class ChelseaScreen extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.top}>
                    <Text style={styles.clubName}>
                        Chelsea Club
                    </Text>
                    <Image
                        style={styles.clubLogo}
                        source={require('./Images/chelsea.png')} />
                </View>
                <View style={styles.middle}>
                    <Text style={styles.clubInfo}>
                        HLV: Frank Lampard
                    </Text >
                    <Text style={styles.clubInfo}>
                        SVĐ: Stamford Bridge Stadium
                    </Text>
                    <TouchableOpacity>
                    <Text style={styles.clubInfo}
                            onPress={() => {this.props.navigation.navigate('Mem')}}    
                    >
                        Danh sách cầu thủ
                    </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'white'
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'gray'
    },
    middle: {
        flex: 5,
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'gray'
    },
    clubName: {
        flex: 5,
        alignItems: 'center',
        marginTop: 35,
        marginLeft: 70,
        //alignContent: ' center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    clubLogo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    clubInfo: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'gray'
    }
})
