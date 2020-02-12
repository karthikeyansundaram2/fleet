import React from "react";
import { Text, 
    View, 
    TextInput, 
    Image, 
    SafeAreaView, 
    StyleSheet,
    Dimensions,
    PickerIOS,
TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "../../styles/authStyles";
const WINDOW_WIDTH= Dimensions.get("window").width;
const WINDOW_HEIGHT= Dimensions.get("window").height;
import RNPickerSelect from 'react-native-picker-select';

import _ from "lodash";
export default class addTasks extends React.Component {

    constructor(props){
        super(props);
        this.state={
            user_id:'',
            type:'',
            address:'',
            user:''
           
        }
        this.addTasks=this.addTasks.bind(this);
        this.user_id=this.props.navigation.getParam('user_id');
        this.is_admin=this.props.navigation.getParam('is_admin');
    }
    componentDidMount(){
        this.props.actions.getUsers();
    }
   async  addTasks(){
      let taskData={
          'user_id': this.is_admin?this.state.user:this.user_id,
          'leed_status':"pending",
          'leed_address':this.state.address,
          'type':this.state.type
      }
      await this.props.actions.addTask(taskData,(res)=>{
          if(res&&res.status==200){
              this.is_admin?
              (alert('added'))
              :
             ( this.props.actions.getTask(this.user_id)&&
              this.props.navigation.navigate('leed',{
                  'user_id':this.user_id
              })
             )
          }
      })
    }
    selectedUser(){
        var userList=[];
        _.map(this.props&&this.props.authReducer&&this.props.authReducer.getUsers,(user,key)=>{
            userList.push({
                value:user&&user.id,
                label:user&&user.username
            })
        })
        return userList
        }
    render(){
        console.log(this.state.user)
        return(
          
            <SafeAreaView style={{flex:1}}>
             <View style={styles.container}>
                 <View style={{  flexDirection: "row", justifyContent: "space-between", height: 80, marginTop: 50, marginHorizontal: 20, }}>
                 <Text style={[styles.topText,{ marginTop: 30}]}>
                    Task Details
                  </Text>
                 
                 </View>
             <View style={{  justifyContent: "center", alignItems: "center", marginBottom: 40}}>
             {this.is_admin?
             
              <RNPickerSelect
              key={0}
              placeholder={{
                label: 'Select a User...',
                value: null,
            }}              
            value={this.state.selectedUserId}
              items={this.selectedUser()}
              style={styles.pickerStyle}           
                 onValueChange={(value) => this.setState({user:value})}
              useNativeAndroidPickerStyle={true}
          />
            :
              <TextInput
                  placeholder={this.user_id?`user_id-${this.user_id}`:'user_id'}
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  defaultValue={this.user_id}
                  editable={false}
                //   onChangeText={(text) => this.setState({username:text})}
                //   value={this.state.username}
                  />}

             <TextInput
             placeholder="Address"
             placeholderTextColor="#FFFFFF"  
             style={styles.textInputAddress}
             multiline
             numberOfLines={4}
             onChangeText={text =>this.setState({address:text})}
             value={this.state.address}
      />
           <TextInput
                  placeholder="type"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({type:text})}
                  value={this.state.type}
                  autoCapitalize={false}
                  />
            
                   <TouchableOpacity style={styles.button}
			            onPress={() =>this.addTasks()}
                        >
			         <Text style={styles.buttonText}>ADD</Text>
		             </TouchableOpacity>
                  </View>
                        </View>
            </SafeAreaView>
        )
    }
}