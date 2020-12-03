import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    Image,
    Text,
    View,
    TextInput,
    Dimensions,
} from 'react-native';

type Props = {};
export default class verticalScrollView extends Component<Props> {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                maximumZoomScale={3}
                minimumZoomScale={0.2}
                keyboardDismissMode='on-drag'
            >
                <Image source={require('./cafe_sapa.jpg')}
                    style={{ width: screenWidth, height: screenHeight, marginTop: 20 }}
                ></Image>
                <Image source={require('./cafe_sapa.jpg')}
                    style={{ width: screenWidth, height: screenHeight, marginTop: 20 }}
                ></Image>
                <Image source={require('./cafe_sapa.jpg')}
                    style={{ width: screenWidth, height: screenHeight, marginTop: 20 }}
                ></Image>
                <Image source={require('./cafe_sapa.jpg')}
                    style={{ width: screenWidth, height: screenHeight, marginTop: 20 }}
                ></Image>
                <Image source={require('./cafe_sapa.jpg')}
                    style={{ width: screenWidth, height: screenHeight, marginTop: 20 }}
                ></Image>

                <TextInput
                    keyboardType="email-address"
                    style={{ padding: 10, margin: 10, borderWidth: 1 }}
                    placeholder="Enter anything"></TextInput>
            </ScrollView>
        );
    }
}
