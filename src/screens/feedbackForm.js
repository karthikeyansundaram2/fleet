import React from "react";
import { Text, 
    View, 
    TextInput, 
    Image, 
    SafeAreaView, 
    StyleSheet,
    Dimensions,
    ScrollView,
TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "../styles/authStyles"
import RNPickerSelect from 'react-native-picker-select';

export default class feedbackForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            gst_available:true,
            unboxed:true,
            shop_name:'',
            customer_name:'',
            contact_number:'',
            gst_number:'',
            unboxed:true,
            electronics_required:'',
            current_sourcing:'',
            customer_comments:'',
            FOS_name:'',
            visit_type:'',
            store_address:'',
            pincode:''
        }
        this.createFeedback=this.createFeedback.bind(this);
        this.user_id=this.props.navigation.getParam('user_id');
        this.task_id=this.props.navigation.getParam('task_id')
        }
    createFeedback(){
      let feedbackData={
        user_id:this.user_id,
        shop_name:this.state.shop_name,
        customer_name:this.state.customer_name,
        contact_number:this.state.contact_number,
        gst_available:this.state.gst_available,
        gst_number:this.state.gst_number,
        unboxed:this.state.unboxed,
        electronics_required:this.state.electronics_required,
        current_sourcing:this.state.current_sourcing,
            customer_comments:this.state.customer_comments,
            FOS_name:this.state.FOS_name,
            visit_type:this.state.visit_type,
            store_address:this.state.store_address,
            pincode:this.state.pincode
      }
      this.props.actions.feedback(feedbackData,(res)=>{
          if(res&&res.status==200){
              this.props.actions.updateStatus({'status':'completed','id':this.task_id},(res)=>{
                  this.props.navigation.goBack()
              })

          }
      })
    }
    render(){
    
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <ScrollView>
                <View style={{  flexDirection: "row", justifyContent: "space-between", height: 80, marginTop: 50, marginHorizontal: 20, }}>
                <Text style={[styles.topText,{ marginTop: 30}]}>
                    Electronics Feedback Form
                 </Text>
              
                </View>
            <View style={{  justifyContent: "center", alignItems: "center", marginBottom: 40}}>
            <TextInput
                  placeholder="Shop name"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({shop_name:text})}
                  value={this.state.shop_name}
                  />

            <TextInput
                  placeholder="Customer name"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({customer_name:text})}
                  value={this.state.customer_name}
                  />
              <TextInput
                  placeholder="Contact number"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({contact_number:text})}
                  value={this.state.contact_number}
                  />
                   <View style={[{ flexDirection: 'row',alignContent:'stretch',margin:10 }]}>
                       <Text style={{textAlign:'left',color:'#ffffff',padding:5}}>GST Available</Text>
          <TouchableOpacity style={styles.radioBox}
            onPress={() => this.setState({gst_available:true})}
          >
            <View style={[styles.radioBox_outer, { backgroundColor:  "#FFF"  }]}>
              <View style={this.state.gst_available  ? styles.radioBoxActive : [styles.radioBoxInActive, { backgroundColor:   "#FFF"}]}></View>
            </View>
            <Text style={[styles.radioBox_label]}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.radioBox}
            onPress={() => this.setState({gst_available:false})}
          >
            <View style={[styles.radioBox_outer, { backgroundColor:   "#FFF" ,marginHorizontal:5 }]}>
              <View style={this.state.gst_available == false ? styles.radioBoxActive : [styles.radioBoxInActive, { backgroundColor:   "#FFF"  }]}></View>
            </View>
            <Text style={[styles.radioBox_label, { color: "#ffffff" }]}>No</Text>
          </TouchableOpacity>
        </View>
                 <TextInput
                  placeholder="GST Number"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({gst_number:text})}
                  value={this.state.gst_number}
                  />
                   <RNPickerSelect
                   placeholder={{
                       label:'Brand new-feedback in pricing'
                   }}
                   style={styles.pickerStyle}

            onValueChange={(value) => this.setState({pricing:value})}
            items={[
                { label: 'Good', value: 'good' },
                { label: 'Medium', value: 'medium' },
                { label: 'Poor', value: 'poor' },
            ]}
        />
          <View style={[{ flexDirection: 'row',alignContent:'stretch',margin:10 }]}>
                       <Text style={{textAlign:'left',color:'#ffffff',padding:5}}>Unboxed visit to warehours</Text>
          <TouchableOpacity style={styles.radioBox}
            onPress={() => this.setState({unboxed:true})}
          >
            <View style={[styles.radioBox_outer, { backgroundColor:  "#FFF"  }]}>
              <View style={this.state.unboxed  ? styles.radioBoxActive : [styles.radioBoxInActive, { backgroundColor:   "#FFF"}]}></View>
            </View>
            <Text style={[styles.radioBox_label]}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.radioBox}
            onPress={() => this.setState({unboxed:false})}
          >
            <View style={[styles.radioBox_outer, { backgroundColor:   "#FFF",marginHorizontal:5  }]}>
              <View style={this.state.unboxed == false ? styles.radioBoxActive : [styles.radioBoxInActive, { backgroundColor:   "#FFF"  }]}></View>
            </View>
            <Text style={[styles.radioBox_label, { color: "#ffffff" }]}>No</Text>
          </TouchableOpacity>
        </View>
                  <RNPickerSelect
                   placeholder={{
                       label:'Category of electronics required'
                   }}
                   style={styles.pickerStyle}

            onValueChange={(value) => this.setState({electronics_required:value})}
            items={[
                { label: 'Mobile wearables', value: 'mobile_Wearables' },
                { label: 'Mobile', value: 'mobile' },
                { label: 'AC', value: 'ac' },
                { label: 'WM', value: 'wm' },
                { label: 'Ref', value: 'ref' },
                { label: 'TVs', value: 'tv' },

            ]}/>
               <RNPickerSelect
                   placeholder={{
                       label:'Current sourcing'
                   }}
                   style={styles.pickerStyle}

            onValueChange={(value) => this.setState({current_sourcing:value})}
            items={[
                { label: 'Distributor', value: 'distributor' },
                { label: 'Brand', value: 'brand' },
                { label: 'Agent', value: 'agent' },

            ]}/>
             <TextInput
                  placeholder="Customer comments"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInputAddress}
                  onChangeText={(text) => this.setState({customer_comments:text})}
                  value={this.state.customer_comments}
                  />
                   <RNPickerSelect
                   placeholder={{
                       label:'FOS Name'
                   }}
                   style={styles.pickerStyle}

            onValueChange={(value) => this.setState({FOS_name:value})}
            items={[
                { label: 'Akash', value: 'akash' },
                { label: 'Syed', value: 'syed' },

            ]}/>
              <RNPickerSelect
                   placeholder={{
                       label:'Brand new-feedback in pricing'
                   }}
                   style={styles.pickerStyle}

            onValueChange={(value) => this.setState({visit_type:value})}
            items={[
                { label: 'New', value: 'new' },
                { label: 'Repeat', value: 'repeat' },
            ]}
        />
                 <TextInput
                  placeholder="Store address"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInputAddress}
                  onChangeText={(text) => this.setState({store_address:text})}
                  value={this.state.store_address}
                  />
                   <TextInput
                  placeholder="Pincode"
                  placeholderTextColor="#FFFFFF"  
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({pincode:text})}
                  value={this.state.pincode}
                  />
                    <TouchableOpacity style={styles.button}
			            onPress={() =>this.createFeedback()}
                        >
			         <Text style={styles.buttonText}>SUBMIT</Text>
		             </TouchableOpacity>

               
                </View>
                </ScrollView>
                </View>
                </SafeAreaView>
        );
    }
}