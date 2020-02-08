import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert,SafeAreaView,Image } from 'react-native';
 import styles from '../../styles/authStyles';
export default class leed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  
  render() {
  
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
          <View style={{ height: 50, marginHorizontal: 30, marginTop: 40, flexDirection: "row"}}>
          <Image     
              style={{width:50,height:50}}
              source={require("../../images/task.jpeg")}
          />
          <Text style={styles.topText}>
          Task Details
          </Text>
          
          </View>
          <View style={{ flexDirection: "row", height:40, alignItems: "center", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20}}>
          <Text style={styles.topText}>
               Name
          </Text>
          <Text style={styles.topText}>
               Address
          </Text>
          <Text style={styles.topText}>
               Location
          </Text>
          </View>
          <View style={{ height: 110, backgroundColor: "rgba(0,0,0,0.2)", marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between",  borderRadius: 6}}>
              <View style={{    width: "20%",  alignItems: "center",  marginTop: 36 }}>
                  <Text style={{ color: "#FFF", fontSize: 18}}>Ben AG</Text>
              </View>
              <View style={{  width: "60%", justifyContent: "center", alignItems: "center", }}>
                  <Text style={{ color: "#FFF", fontSize: 18,marginBottom: 4}}>
                      900 S Las Vagas Blvd
                  </Text>
                  <Text style={{ color: "#FFF", fontSize: 18, marginBottom: 4}}>
                      900 S Las Vagas Blvd
                  </Text>
                  <Text style={{ color: "#FFF", fontSize: 18, marginBottom: 4}}>
                      900 S Las Vagas Blvd
                  </Text>

              </View>
              <View style={{  width: "20%",  justifyContent: "center", alignItems: "center"}}>
              <Image     
              source={require("../../images/location.png")}
          />

              </View>


          </View>

      </View>
     
      </SafeAreaView>
    )
  }
}
 
