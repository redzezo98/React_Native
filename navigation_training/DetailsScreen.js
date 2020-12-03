import React, { Component } from 'react';
import BasicFlatList from './components/BasicFlatList';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
       
      }
    render() {
        return (
            <BasicFlatList parentFlatList={this} navigation={this.props.navigation}
          />
        )
    }
}
