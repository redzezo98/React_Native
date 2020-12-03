import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableHighLight,
  Dimensions,
  TextInput,
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newClubName: '',
      Place: '',
    };
  }
  showAddModal = () => {
    this.refs.myModal.open();
  };
  render() {
    return (
      <Modal
        ref={'myModal'}
        style={{
          justifyContent: 'center',
          borderRadius: 30,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 280,
        }}
        position="center"
        backdrop={true}
        onClosed={() => {
          alert('Model closed');
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 40,
          }}>
          Club's Name
        </Text>
        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
            borderBottomWidth: 1,
          }}
          onChangeText={(text) => this.setState({newClubName: text})}
          placeholder="Enter new Club's name"
          value={this.state.newClubName}
        />
        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
            borderBottomWidth: 1,
          }}
          onChangeText={(text) => this.setState({Place: text})}
          placeholder="Enter Palce of Club"
          value={this.state.Place}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={{
            padding: 8,
            marginLeft: 70,
            marginRight: 70,
            height: 40,
            borderRadius: 6,
            backgroundColor: 'mediumseagreen',
          }}
          onPress={() => {
            if (this.state.newClubName.length == 0 || this.state.Place == 0) {
              alert("you must enter Club's name and Place ");
              return;
            }
          }}>
          Save
        </Button>
      </Modal>
    );
  }
}
