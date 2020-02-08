import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { connect } from 'react-redux';
import loginScreen from './screens/Authentication/login';
import CreateAccount from "./screens/Authentication/createAccount";
import Leed from "./screens/tasks/leed";
import { createAppContainer } from 'react-navigation';
import AuthenticationContainer from "./container/AuthenticationContainer"
const RouteNavigator = createSwitchNavigator({
  
  Login:{
      screen:AuthenticationContainer(loginScreen)
  },
  CreateAccount: {
      screen: AuthenticationContainer(CreateAccount)
  },
  leed:{
      screen:Leed
  },
  initialRouteName: "App"

});

export default createAppContainer(RouteNavigator);