import React, { Component } from "react";
import { SafeAreaView, Modal, PermissionsAndroid, Platform, View,Text } from "react-native";
import { Provider } from "react-redux";
import  AppContainer  from "./src/Routes";
import Login from "./src/screens/Authentication/login";
import CreateAccount from "./src/screens/Authentication/createAccount"
import Leed from "./src/screens/tasks/leed";
import { createAppContainer } from 'react-navigation';
import {
    
    createSwitchNavigator,
  } from "react-navigation";
import configureStore from "./src/store/configureStore";
export const store = configureStore;
import AuthenticationContainer from "./src/container/AuthenticationContainer";
class App extends Component {
constructor(props){
    super(props);
}

render(){
    console.log(this.props)
    return(

        <Provider store={store}>

        <SafeAreaView style={{ flex: 1, backgroundColor: "#516A98" }}>
            {/* <RootNavigator/> */}
            
            <AppContainer
              uriPrefix="/app"
            />
          {/* <CreateAccount/> */}
          {/* <Leed/> */}
        </SafeAreaView>
     </Provider>
    )
}
}

export default App;