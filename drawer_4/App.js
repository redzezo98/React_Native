import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SingOutScreen
} from './screens'

import SideBar from './components/SideBar'

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
  contentComponent: SideBar
}) 

export default createAppContainer(DrawerNavigator);