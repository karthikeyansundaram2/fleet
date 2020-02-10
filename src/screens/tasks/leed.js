import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity ,SafeAreaView,Image,ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
 import styles from '../../styles/authStyles';
 import _ from "lodash";
export default class leed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false
    }
    this.user_id=this.props.navigation.getParam('user_id')
  }
  
  componentDidMount(){
      this.props.actions.getTask(this.user_id)
  }
  
  render() {
    //   console.log(this.props&&this.props.authReducer&&this.props.authReducer.getTask)
      let tasks=_.groupBy(this.props&&this.props.authReducer&&this.props.authReducer.getTask,'leed_status')
      
        return (
      <SafeAreaView style={{flex:1}}>


                <ScrollView style={{marginHorizontal:10}}>

      <View style={styles.container}>
          <View style={{ height: 50, marginHorizontal: 30, marginTop: 40, flexDirection: "row"}}>
          <Image     
              style={{width:50,height:50}}
              source={require("../../images/task.jpeg")}
          />
          <Text style={styles.topText}>
          Pending Task 
          </Text>
          
          </View>
          <View style={{ flexDirection: "row", height:40, alignItems: "center", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20}}>
          <Text style={styles.topText}>
               Type
          </Text>
          <Text style={styles.topText}>
               Address
          </Text>
          <Text style={styles.topText}>
               Location
          </Text>
          </View>
          {_.map(tasks&&tasks.pending,(task,key)=>{
              return(
       <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('StaticWebView')
          }}
       >
            <View style={{ height: 110, backgroundColor: "rgba(0,0,0,0.2)", marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between",  borderRadius: 6,marginTop:5}} key={key}>
              <View style={{    width: "20%",  alignItems: "center",  marginTop: 36 }}>
              <Text style={{ color: "#FFF", fontSize: 18}}>{task.type}</Text>
              </View>
              <View style={{  width: "60%", justifyContent: "center", alignItems: "center", }}>
                  <Text style={{ color: "#FFF", fontSize: 18,marginBottom: 4}}>
                    {task.leed_address}
                  </Text>
                  

              </View>
              <View style={{  width: "20%",  justifyContent: "center", alignItems: "center"}}>
              <TouchableOpacity activeOpacity = { .5 } onPress={()=>
              this.props.navigation.navigate('map',{
                  'address':task.leed_address
              })
            }>
              <Image     
              source={require("../../images/location.png")}
          />
          </TouchableOpacity>

              </View>


          </View>
          </TouchableOpacity>              )
          })
          
          }
          <View style={{marginHorizontal:30,marginTop:10, flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity activeOpacity = { .5 } 
          style={{flexDirection:'row'}}
          onPress={()=>
              this.props.navigation.navigate('addTasks',{
                  'user_id':this.user_id
              })
            }>
          <Image     
              style={{width:20,height:20}}
              source={require("../../images/plus1.jpg")}
          />
              <Text style={{ color: "#FFF", fontSize: 14}}>Add Task</Text>
</TouchableOpacity>
          </View>

<View style={{ height: 50, marginHorizontal: 30, marginTop: 40, flexDirection: "row"}}>
          <Image     
              style={{width:50,height:50}}
              source={require("../../images/task.jpeg")}
          />
          <Text style={styles.topText}>
          Completed Task 
          </Text>
          
          </View>
          <View style={{ flexDirection: "row", height:40, alignItems: "center", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20}}>
          <Text style={styles.topText}>
               Type
          </Text>
          <Text style={styles.topText}>
               Address
          </Text>
          <Text style={styles.topText}>
               Location
          </Text>
          </View>
          {_.map(tasks&&tasks.completed,(task,key)=>{
              return(

            <View style={{ height: 110, backgroundColor: "rgba(0,0,0,0.2)", marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between",  borderRadius: 6}} key={key}>
              <View style={{    width: "20%",  alignItems: "center",  marginTop: 36 }}>
              <Text style={{ color: "#FFF", fontSize: 18}}>{task.type}</Text>
              </View>
              <View style={{  width: "60%", justifyContent: "center", alignItems: "center", }}>
                  <Text style={{ color: "#FFF", fontSize: 18,marginBottom: 4}}>
                    {task.leed_address}
                  </Text>
                  

              </View>
              <View style={{  width: "20%",  justifyContent: "center", alignItems: "center"}}>
              <Image     
              source={require("../../images/location.png")}
          />

              </View>


          </View>
              )
          })
          
        }

      </View>
     
     </ScrollView>
     
      </SafeAreaView>
    )
  }
}
 
