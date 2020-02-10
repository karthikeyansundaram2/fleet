import * as types from "../constants/actionTypes";
import { AsyncStorage, Platform } from "react-native";
import assign from "lodash/assign";

const initalState={
    loginData:{},
    profileData:{}
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
          default:
            return state;
    }
}