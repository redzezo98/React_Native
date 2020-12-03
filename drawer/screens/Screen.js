import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Screen extends Component {
    render() {
        return (
           <View style={styles.container}
           >
               <SafeAreaView style ={{flex: 1}}>
                    <TouchableOpacity 
                        style={{alignItems: 'flex-end', margin: 10}}
                        onPress = {this.props.navigation.openDrawer}
                    >
                       <FontAwesomeIcon icon={ faBars } size ={24} color='#161924' />

                    </TouchableOpacity>

                    <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.text}>{this.props.name} Screen</Text>
                    </View>
               </SafeAreaView>
           </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500',
        
    }
})


