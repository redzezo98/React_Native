import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, Image, ImageBackground} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import Icon from 'react-native-ionicons'



export default class sideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
               <ImageBackground
                source={require('../images/blue.jpg')}
                style={{width: undefined, padding: 16, paddingTop: 40}}
               >
                   <Image source={require('../images/profile.png')}
                   style={styles.profile}/>
                   <Text style={styles.name}>Le Duc Loc</Text>
               </ImageBackground>
               <View style ={styles.container}>
                <DrawerNavigatorItems {...this.props} />
               </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF',
        marginLeft: 10
    },
    name: {
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    }
})
