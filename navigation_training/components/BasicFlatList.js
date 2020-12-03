import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import flatListData from '../data/flatListData';
import AddModal from './AddModal';
import FlatListItem from './FlatListItem';


export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null,
    };
    this._onpressAdd = this._onpressAdd.bind(this);
  }

  refreshFlatList = (deleteKey) => {
    this.setState((prevState) => {
      return {
        deleteRowKey: deleteKey,
      };
    });
  };
  _onpressAdd() {
    //alert("Add Item");
    this.refs.AddModal.showAddModal();
  }
  static navigationOptions = {
    headerShown : false,
    headerMode: 'none'
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 10 }}>
        <View
          style={{
            backgroundColor: 'green',
            height: 64,
            marginBottom: 10,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{ marginRight: 20 }}
            backgroundColor="green"
            onPress={this._onpressAdd}>
            <Image
              source={require('../Images/add_button.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => {
            //console.log(`Item=${item}, index=${index}`);
            return (
              <FlatListItem
                item={item}
                index={index}
                parentFlatList={this}
                navigation={this.props.navigation}
              ></FlatListItem>
            );
          }}></FlatList>
        <AddModal ref={'AddModal'} parentFlatList={this}></AddModal>
      </View>
    );
  }
}