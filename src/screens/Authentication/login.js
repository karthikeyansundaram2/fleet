import React from "react";
import { Text, 
    View, 
    TextInput, 
    Image, 
    SafeAreaView, 
    StyleSheet,
    Dimensions,
TouchableOpacity } from "react-native";
import styles from "../../styles/authStyles";
const WINDOW_WIDTH= Dimensions.get("window").width;
const WINDOW_HEIGHT= Dimensions.get("window").height;
export default class login extends React.Component {
   constructor(props){
       super(props);
       this.state={
           email:'',
           password:''
       }
       this.formData = {};
       this.errors = {};
this.onLoginSubmit=this.onLoginSubmit.bind(this) 
  }

  onLoginSubmit(){
      
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(this.state.email)){
        let loginData={
            'email':this.state.email,
            'password':this.state.password
        }
        this.props.actions.login(loginData,(response)=>{
            if(response&&response.status==200){
                let user_id=response&&response.data&&response.data.username&&response.data.username.id
               response&&response.data&&response.data.username&&response.data.username.is_admin?
                 this.props.navigation.navigate('addTasks',
                 {'is_admin':true
                                })
               : this.props.navigation.navigate('leed',{
                    'user_id':user_id
                })
            }
            
        })
    }
    else{
        alert('Email is invalid')
    }
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
    onChangeText={(text) => this.setState({email:text})}
    value={this.state.email}
    autoCapitalize = 'none'

    />
<TextInput
    placeholder="Password"
    placeholderTextColor="#FFFFFF"  
    style={styles.textInput}
    onChangeText={(text) => this.setState({password:text})}
     value={this.state.password}
     secureTextEntry={true}
    />

<TouchableOpacity style={styles.button}
        onPress={() => this.onLoginSubmit()}
      >
     <Text style={styles.buttonText}>LOGIN</Text>
     </TouchableOpacity>
</View>
<View style={{ flex: 1,alignItems: "center",  justifyContent: "center"}}>
<TouchableOpacity 
      onPress={()=>{
        //   this.createAccount()
        this.props.navigation.navigate("CreateAccount")
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

