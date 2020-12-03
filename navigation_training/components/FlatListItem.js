import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }
  
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            alert('Update');
          },
          text: "Edit" , type: 'primary'
        },
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Warning',
              'Are you sure?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('champion'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    //Refresh FlatList
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      secId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 20,
              flex: 1,
              backgroundColor: this.props.index % 2 == 0 ? 'red' : 'blue',
            }}>
            <Image
              source={this.props.item.image}
              style={{
                width: 100,
                height: 100,
                margin: 10,
                borderRadius: 100,
              }}></Image>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={styles.FlatListItemName}>
                {this.props.item.name}
              </Text>
              <Text style={styles.FlatListItem}>{this.props.item.Place}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(this.props.item.name);
              }}
              style={{
                width: 30,
                height: 30,
                margin: 30,
                marginTop: 45,
                borderRadius: 30,
              }}>
              <Image
                source={require('../Images/arrow.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                }}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 5,
              backgroundColor: 'white',
            }}></View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  FlatListItemName: {
    color: 'white',
    paddingTop: 30,
    fontSize: 18,
  },
  FlatListItem: {
    color: 'white',
    paddingTop: 10,
    fontSize: 18,
  },
});
