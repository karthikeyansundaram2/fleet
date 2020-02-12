import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity ,SafeAreaView,Image,ScrollView,ActivityIndicator } from 'react-native';
 import styles from '../../styles/authStyles';
 import _ from "lodash";
export default class leed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false,
      visible:true
    }
    this.user_id=this.props.navigation.getParam('user_id')
  }
  
  componentDidMount(){
      this.props.actions.getTask(this.user_id)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps&&nextProps.authReducer&&nextProps.authReducer.getTask&&nextProps.authReducer.getTask){
      this.setState({visible:false})
    }
  }
  
  render() {
    //   console.log(this.props&&this.props.authReducer&&this.props.authReducer.getTask)
      let tasks=_.groupBy(this.props&&this.props.authReducer&&this.props.authReducer.getTask,'leed_status')
      // tasks&&tasks.pending&&this.setState({visible:false})
        return (
      <SafeAreaView style={{flex:1,color:"#516A98"}}>


                <ScrollView style={{marginHorizontal:10,flex:1,backgroundColor:"#516A98"}}>

      <View style={styles.container}>
      {tasks&&tasks.pending&&!tasks.pending.length && (
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
          {  tasks&&tasks.pending&&tasks.pending.length? _.map(tasks&&tasks.pending,(task,key)=>{
              return(
       <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('feedback',{
              'user_id':this.user_id,
              'task_id':task.id
            })
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
          :
          
         
        <Image
        style={{
        margin:130,
        marginHorizontal:100,
        justifyContent: 'center',
        alignItems: 'center',
       }}
  source={require("../../images/no_tasks.png")}        />
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

            
{tasks&&tasks.completed?<View>
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

            <View style={{ height: 110, backgroundColor: "rgba(0,0,0,0.2)", marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between",  marginBottom:10,borderRadius: 6}} key={key}>
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
</View>:<View/>}
      </View>
     
     </ScrollView>
     
      </SafeAreaView>
    )
  }
}
 
