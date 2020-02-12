import * as types from "../constants/actionTypes";
import { AsyncStorage, Platform } from "react-native";
import assign from "lodash/assign";

const initalState={
    loginData:{},
    profileData:{},
    getUsers:{}
}
export default function authReducer(state=initalState,action){
    switch(action.type){
        case types.LOGIN:{
            return assign({}, state, {
                loginData: action.userData
            });
          }
        case types.CREATE_ACCOUNT:{
            return assign({},state,{
                profileData:action.profileData
            })
        }
        case types.ADD_TASKS :{
            return assign({}, state, {
                newTask: action.newTask
            });
          }
        case types.GET_TASKS:{
            return assign({},state,{
                getTask:action.getTask
            })
        }
        case types.GET_USERS:{
            return assign({},state,{
                getUsers:action.users
            })
        }
        case types.ADD_FEEDBACK:{
            return assign({},state,{
                feedback:action.feedback 
            })
        }
        case types.PUT_TASKS:{
            return assign({},state,{
                taskData:action.taskData
            })
        }
          default:
            return state;
    }
}