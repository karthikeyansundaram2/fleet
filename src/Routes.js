import React from "react";
import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { connect } from 'react-redux';
import loginScreen from './screens/Authentication/login';
import CreateAccount from "./screens/Authentication/createAccount";
import Leed from "./screens/tasks/leed";
import { createAppContainer } from 'react-navigation';
import map from "./screens/tasks/map";
import addTasks from "./screens/tasks/addTasks";
import StaticWebView from "./screens/staticWebView";
import { createStackNavigator } from 'react-navigation-stack';
import feedbackForm from "./screens/feedbackForm"
import AuthenticationContainer from "./container/AuthenticationContainer"
const AppNavigator = createStackNavigator({
  Home: {
    screen: AuthenticationContainer(loginScreen),
  },
  Login:{
      screen:AuthenticationContainer(loginScreen)
  },
  CreateAccount: {
      screen: AuthenticationContainer(CreateAccount)
  },
  leed:{
      screen:AuthenticationContainer(Leed)
  },
  map:{
    screen:AuthenticationContainer(map)
  },
  addTasks:{
    screen:AuthenticationContainer(addTasks)
  },
  feedback:{
    screen:AuthenticationContainer(feedbackForm)
  },
  StaticWebView:{
    screen:AuthenticationContainer(StaticWebView)
  }
});
const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;