import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'

export default class slection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.quest}>
                        Bạn là:
                    </Text>
                </View>
                <View style={styles.mid}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('loginM')
                        }}>
                        <Image
                            style={styles.avt}
                            source={require('../images/manager.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('loginM')
                        }}>
                        <Image
                            style={styles.avt}
                            source={require('../images/employee.jpg')} />
                    </TouchableOpacity>

                </View>
                <View style={styles.bot} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    top: {
        flex: 2,
    },
    mid: {
        flex: 3,
        flexDirection: 'row'
    },
    bot: {
        flex: 3
    },
    button: {
        flex: 1
    },
    avt: {
        margin: 35,
        flex: 1,
        width: '70%',
        height: '70%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,

    },
    quest: {
        fontSize: 18,
        marginTop: 50,
        margin: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#148ADF',
        alignItems: 'center',
        width: '70%',
        marginLeft: 60,
        borderRadius: 5,
        paddingLeft: 110
    },
})
