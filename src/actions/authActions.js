import {
    AsyncStorage,
    Platform,
    PermissionsAndroid
  } from "react-native";
  import * as types from "../constants/actionTypes";
  import * as API_END_POINTS from "../constants/api";
  import axios from "axios";

  export function login(loginData){
   return dispatch=>{
       axios.post(
           API_END_POINTS.LOGIN, loginData, {
            headers: {
              Accept: "application/json,",
              "Content-Type": "application/json"
            },
            withCredentials: true
          }
          )
          .then(async response => {
              if(response.status==200){
                dispatch({
                    type: types.LOGIN,
                    userData: response&&response.data
                  })
              }
          }).catch((e)=>{
              console.log(e)
          })
   }
  }
