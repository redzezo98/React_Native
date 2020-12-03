import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import * as Icon from 'react-feather'
import { ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, SingOutScreen, StatisticScreen } from './screens'
import sideBar from './components/sideBar'

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SingOutScreen
},
{
  contentComponent: sideBar,
  drawerWidth: Dimensions.get('window').width * 0.85,
  hideStatusBar: false,
  contentOptions: {
    ActivityScreen: 'black'
  }

});




export default createAppContainer(DrawerNavigator);
