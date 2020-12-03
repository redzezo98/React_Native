import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import IonIcon from 'react-native-vector-icons/Ionicons';


export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={require('../images/blue.jpg')}
                    style={{ width: undefined, padding: 16, paddingTop: 48 }}>
                    <Image source={require('../images/profile.png')}
                        style={styles.profile} />
                    <Text style={styles.name}>Le Duc Loc</Text>

                    <View style={{flexDirection: 'row'}} >
                        <Text style={styles.followers}>1041 Followers</Text>
                        <IonIcon  name="people" size = {16} color='black' />
                    </View>
                </ImageBackground>
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
        color: '#FFF',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    }
});