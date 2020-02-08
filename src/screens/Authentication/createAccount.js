import React from "react";
import { Text, 
    View, 
    TextInput, 
    Image, 
    SafeAreaView, 
    StyleSheet,
    Dimensions,
TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "../../styles/authStyles";
const WINDOW_WIDTH= Dimensions.get("window").width;
const WINDOW_HEIGHT= Dimensions.get("window").height;
export default class createAccount extends React.Component {

    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render(){
        console.log(this.props)
        return(
          
            <SafeAreaView style={{flex:1}}>
             <View style={styles.container}>
                 <View style={{  flexDirection: "row", justifyContent: "space-between", height: 80, marginTop: 50, marginHorizontal: 20, }}>
                 <Text style={[styles.topText,{ marginTop: 30}]}>
                     Create Account
                  </Text>
                  <Image     
                  source={require("../../images/user.png")}
                  >
               </Image>
                 </View>
             <View style={{  justifyContent: "center", alignItems: "center", marginBottom: 40}}>

              <TextInput
                  placeholder="UserName"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  />
               <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor="#FFFFFF"               
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  />
           <TextInput
                  placeholder="Email"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  />
             <TextInput
                  placeholder="Password"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  />
                   <TouchableOpacity style={styles.button}
			            onPress={() => alert('button clicked')}
                        >
			         <Text style={styles.buttonText}>SIGN UP</Text>
		             </TouchableOpacity>
                  </View>
                        </View>
            </SafeAreaView>
        )
    }
}