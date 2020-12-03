import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
export default class Member_item extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.information}>{this.props.item.name}</Text>
                <View style={styles.bodyInfo}>
                    <Text style={styles.information}>Height: {this.props.item.height}</Text>
                    <Text style={styles.information}>Weight: {this.props.item.weight}</Text>
                </View>
                <View styles={styles.bodyInfo}>
                    <Text style={styles.information}>Nation: {this.props.item.Nation}</Text>
                    <Text style={styles.information}>Birthday: {this.props.item.birthday}</Text>
                </View>
                <Text style={styles.information}>Position: {this.props.item.position}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E6E6FA',
        borderColor: '#0000CD',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
    },
    bodyInfo: {
        flex: 1,
        flexDirection: 'row'
    },
    information: {
        padding: 10,
        fontSize: 16
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 100
    }
})