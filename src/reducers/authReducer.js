import * as types from "../constants/actionTypes";
import { AsyncStorage, Platform } from "react-native";

const initalState={
    loginData:{}
}
export default function authReducer(state=initalState,action){
    switch(action.type){
        case types.LOGIN:{
            return assign({}, state, {
                loginData: action.userData
            });
          }
          default:
            return state;
    }
}