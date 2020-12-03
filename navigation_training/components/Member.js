import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Member_item from './Member_item';
import danhsachCauThu from '../data/danhsachCauThu'

export default class Member extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 22}}>
        <FlatList
          data={danhsachCauThu}
          renderItem={({item, index}) => {
            return (<Member_item item={item} index={index}>

            </Member_item>);
          }}></FlatList>
      </View>
    );
  }
}
