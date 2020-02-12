import React, { Component } from "react";
import { View, ActivityIndicator, Dimensions, Alert, BackHandler, } from "react-native";
import styles from "../styles/authStyles"
import {WebView} from "react-native-webview"
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import { HeaderBackButton } from 'react-navigation';

export default class StaticWebView extends Component {
  static navigationOptions = ({navigation}) => {
    return{
      headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('A')}}/>)
   }
  }
  constructor(props) {
    super(props);
  
    this.state = { visible: true, showAlertModal: false, };
    this.back = this.props.navigation.getParam("from")

  }
  hideLoader() {
    this.setState({ visible: false });
  }
  async serverRefresh() {
    await this.props.actions.onServiceMaintanenceCheck();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    if (this.props.navigation.isFocused() && this.back) {
      this.setState({
        showAlertModal: true
      });
      return true;
    }
  };
  onMessage = (e) => {
    let { data } = e.nativeEvent; // data you will receive from html
    console.log(data)
   }


  render() {
    const { navigation, commonReducer } = this.props;
    let title = navigation.getParam("title");
    let webUrl = navigation.getParam("webUrl");
    // const userPreferredStyle = commonReducer.theme == "light" ? lightThemeStyle : themeStyle;
    return (
      <View style={styles.container}>
        
        <WebView
            bounces={false}
            onLoad={() => this.hideLoader()}
            on
            originWhitelist={['*']}
            source={{ uri: 'https://forms.gle/FUctDRhoFAs2kSc6A' }}
            onMessage={(event)=> console.log(event.nativeEvent.data)}


          />
        {this.state.visible && (
          <ActivityIndicator
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            size="large"
          />
        )}
      </View>
    );
  }
}
StaticWebView.propTypes = {};
