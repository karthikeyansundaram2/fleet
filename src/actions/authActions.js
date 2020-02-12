import {
    AsyncStorage,
    Platform,
    PermissionsAndroid
  } from "react-native";
  import * as types from "../constants/actionTypes";
  import * as API_END_POINTS from "../constants/api";
  import axios from "axios";

  export function login(loginData,callback){
   return dispatch=>{
       axios.post(
           API_END_POINTS.LOGIN, loginData, {
            headers: {
              Accept: "application/json,",
              'Content-Type': "application/json",
            },
            withCredentials: true
          }
          )
          .then(async response => {
              if(response.status==200){
                callback(response)
                dispatch({
                    type: types.LOGIN,
                    userData: response&&response.data
                  })
              }
          }).catch((e)=>{
            alert('Incorrect password or email')
              console.log(e)
              // callback(e)
          })
   }
  }
export function createProfile(profileData,callback){
return dispatch=>{
  axios.post(
    API_END_POINTS.CREATE_ACCOUNT,profileData,{
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      withCredentials:true
    }
  ).then(async response=>{
    if(response.status==200){
      dispatch({
        type:types.CREATE_ACCOUNT,
        profileData:response&&response.data
      })
      callback(response)
    }
  }).catch((e)=>{
    console.log(e)
  })
}
}
export function getUsers(){
  return dispatch=>{
    axios.get(
      API_END_POINTS.GET_USERS,{
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        withCredentials:true
  
      }
    ).then(response=>{
      if(response.status==200){
        dispatch({
          type:types.GET_USERS,
          users:response&&response.data
        })
      }
    })
  }
}