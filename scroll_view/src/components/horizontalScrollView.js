import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View, Dimensions } from 'react-native';

export default class horizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                onMomentumScrollBegin={() => {
                    alert('Being scrolling')
                }}
            >
                <View style={{
                    backgroundColor: "#5f9ea0",
                    flex: 1,
                    marginTop: 30,
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: 'center',
                    alignContent: 'center'
                }} >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color:'white',
                        textAlign: 'center'
                    }} >
                        Screen 1
                    </Text>
                </View>

                <View style={{
                    backgroundColor: "tomato",
                    flex: 1,
                    marginTop: 30,
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: 'center',
                    alignContent: 'center'
                }} >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color:'white',
                        textAlign: 'center'
                    }} >
                        Screen 2
                    </Text>
                </View>
                <View style={{
                    backgroundColor: "#663399",
                    flex: 1,
                    marginTop: 30,
                    width: screenWidth,
                    height: screenHeight,
                    justifyContent: 'center',
                    alignContent: 'center'
                }} >
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color:'white',
                        textAlign: 'center'
                    }} >
                        Screen 3
                    </Text>
                </View>

            </ScrollView>
        );
    }
}
