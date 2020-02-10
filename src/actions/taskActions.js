import * as types from "../constants/actionTypes";
  import * as API_END_POINTS from "../constants/api";
  import axios from "axios";
import { isRestProperty } from "@babel/types";

  export function addTask(taskData,callback){
      return dispatch=>{
          axios.post(
              API_END_POINTS.ADD_TASKS,taskData,{
                  headers:{
                      Accept:"application/json",
                      "Content-Type": "application/json"
                    },
                    withCredentials:true
              }
          ).then(response=>{
              if(response.status==200){
                  callback(response)
                  dispatch({
                      type:types.ADD_TASKS,
                      newTask:response&&response.data
                  })
              }
          }).catch((e)=>{
              console.log(e)
          })
      }
  }
  export function getTask(user_id){
      return dispatch=>{
          axios.get(
              API_END_POINTS.GET_TASKS+'?user_id='+user_id,{
                  headers:{
                    Accept:"application/json",
                    "Content-Type": "application/json"
                  },
                  withCredentials:true
                  
              }
          ).then(response=>{
              if(response.status==200){
                  dispatch({
                      type:types.GET_TASKS,
                      getTask:response&&response.data
                  })
              }
          })
      }
  }

  