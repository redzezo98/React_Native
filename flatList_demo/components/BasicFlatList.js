import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  fetch
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import {getTeamfromSever} from '../sever/Sever'

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }


  clickButton = () => {
    alert('Prime League 2019/2020');
  };

  render() {
    console.log("Data", this.props.item)
    console.log("Image", this.props.item.image)
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({ activeRowKey: null });
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.key });
      },
      right: [
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
              { cancelable: true },
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
              onPress={this.clickButton}
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

export default class BasicFlatList extends Component {

  

  constructor(props) {
    super(props);
    this.state = ({
      deleteRowKey: null,
      teamsFromSever: []
    });
    this._onpressAdd = this._onpressAdd.bind(this)
  }

  componentDidMount() {
    this.refreshDataFromSever();
  }
  refreshDataFromSever = () => {
    getTeamfromSever().then((teams) => {
      console.log(teams)
      this.setState({ teamsFromSever: teams })
    }).catch((error) => {
      console.error(error);
      console.error('loi');
      this.setState({ teamsFromSever: [{"name":"alah"}] })
    });
  }

  refreshFlatList = (deleteKey) => {
    this.setState((prevState) => {
      return {
        deleteRowKey: deleteKey,
      };
    });
  }
  _onpressAdd() {
    //alert("Add Item");
    this.refs.AddModal.showAddModal();
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 10 }}>
        <View style={{
          backgroundColor: 'green',
          height: 64,
          marginBottom: 10,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <TouchableOpacity
            style={{ marginRight: 20 }}
            backgroundColor='green'
            onPress={this._onpressAdd}
          >
            <Image
              source={require('../Images/add_button.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                marginRight: 20
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          //data={flatListData}
          data={this.state.teamsFromSever}
          renderItem={({ item, index }) => {
            //console.log(`Item=${item}, index=${index}`);
            return (
              <FlatListItem
                item={item}
                index={index}
                parentFlatList={this}></FlatListItem>
            );
          }}></FlatList>
        <AddModal ref={'AddModal'} parentFlatList={this} >

        </AddModal>
      </View>
    );
  }
}
