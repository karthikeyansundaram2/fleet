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
import CreateAccount from "./createAccount";
import styles from "../../styles/authStyles";
const WINDOW_WIDTH= Dimensions.get("window").width;
const WINDOW_HEIGHT= Dimensions.get("window").height;
export default class login extends React.Component {
   constructor(props){
       super(props);
       this.state={
           text:''
       }
   }

   componentDidMount(){
       let loginData={
           "email":'karthi@leaguex.com',
           "password":'karthi'
       }
    //    this.props.actions.login(loginData)
   }
  
    render(){
        
        const { props}= this.props
        return(
     <SafeAreaView style={{flex:1}}>

            <View style={styles.container}> 
                <View style={{ height: 50, marginHorizontal: 30, marginTop: 40}}>
                    <Text style={styles.topText}>
                        Welcome Back
                    </Text>
                    <Text style={styles.topText}>
                         Please Login With your account
                    </Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 60}}>
                    <Image     
                        source={require("../../images/user.png")}
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
        onPress={() => navigation.navigate('leed')}
      >
     <Text style={styles.buttonText}>LOGIN</Text>
     </TouchableOpacity>
</View>
<View style={{ flex: 1,alignItems: "center",  justifyContent: "center"}}>
<TouchableOpacity 
      onPress={()=>{
        //   this.createAccount()
        props.navigation.navigate("CreateAccount")
      }}
    >
     <Text style={{ fontSize: 22, color: "#CEBFA3"}}>CREATE AN ACCOUNT</Text>

    </TouchableOpacity> 

</View>
</View>
</SafeAreaView>

        )
    }
}







// // Login Page

