import {StyleSheet,Dimensions} from "react-native";
const WINDOW_WIDTH= Dimensions.get("window").width;
const WINDOW_HEIGHT= Dimensions.get("window").height;

const authStyles={
    container:{
        flex: 1,
        backgroundColor:"#516A98",
        
       },
       topTextContainer:{ marginTop:100,flexDirection:'row',alignContent:'center',padding:20, backgroundColor: "red"},
       topText:{color:'#CEBFA3',fontSize:24,},
        form: {
            flex: 1,
            margin:20,
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          imageView:{
            justifyContent:'center',alignItems: 'center',marginTop:40
          },
        textInput:{ 
        color:'#FFFFFF',
        textAlign: 'left',
        height: 60,
        borderWidth: 2,
        width:340,
         borderColor: '#516A98',
         borderRadius: 20 ,
         backgroundColor:'rgba(0,0,0,0.1)', 
         padding:20,
         marginTop:10
        },
        textInputAddress:{ 
          color:'#FFFFFF',
          textAlign: 'left',
          height: 100,
          borderWidth: 2,
          width:340,
           borderColor: '#516A98',
           borderRadius: 20 ,
           backgroundColor:'rgba(0,0,0,0.1)', 
           padding:20,
           marginTop:10
          },
        button: {
            marginTop:10,
            backgroundColor: '#CEBFA3',
            borderRadius: 20,
            width:187,
            height:40
          },
        buttonText:{
            color:'#6A532C',
            fontSize:20,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            padding:10
        },
        bottom:{
            borderRadius: 20,
            position: 'absolute',
            top: WINDOW_HEIGHT-130 , 
            height:100,
            width: WINDOW_WIDTH,
        },
        bottomText:{
            fontSize:20,
            color:'#CEBFA3',
            position: 'absolute',
            height: 40,
            textAlign:'center',
            top: WINDOW_HEIGHT-100 , 
            width: WINDOW_WIDTH,
        }
         
}
export default authStyles;