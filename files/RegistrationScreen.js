import React ,{PropTypes}from 'react';
import {

  StyleSheet,
  ScrollView,
  View,

  TextInput,
  Button,


} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
export default class RegistrationScreen extends React.Component{

state={
  firstName:'',
  lastName:'',
  email:'',
  mobileNumber:'',
  password:'',
  confirmPassword:'',
  selectedIndex:0,
  selectedIndex2:0,

}

onChangeMin=(label)=>{

this.setState({selectedIndex:label});
}
onChangeMin1=(label)=>{

  this.setState({selectedIndex2:label});
  }


  registerUser=()=>{
    if (this.state.firstName != '') {  
      if (this.state.lastName != '') {
        if (this.state.email != '') {
          if (this.state.mobileNumber != '') {
            if (this.state.password != '') {
              if (this.state.confirmPassword != '') {
                if (this.state.confirmPassword===this.state.password) {
                 if( this.isEmailValid(this.state.email)){
                   if( this.phonenumber(this.state.mobileNumber)){
                    if(this.state.selectedIndex!=''){
                      if(this.state.selectedIndex2!=''){
                  this.props.navigation.navigate('Home1',{name:this.state.firstName})
                }else{
                  alert('Please Select City')
                }
              }else{
                  alert('Please Select State')
                }
              }else{
                alert('Please Enter Valid Mobile Number');
                }
              } else{
                  alert('Please Enter Valid Email Address');
                }
              }
                else {
                  alert('Password not match');
                }
              } else {
                alert('Please Enter Confirm Password');
              }
            } else {
              alert('Please Enter Password');
            }
          } else {
            alert('Please Enter Valid Mobile Number');
          }
        } else {
          alert('Please Enter Email Address');
        }
      } else {
        alert('Please Enter Last Name');
      }
    } else {
      alert('Please Enter First Name');
    }
   
  }
  isEmailValid = (mail) => {
    console.log(this.state.mobileNumber)
   
    let email = mail
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(String(email).toLowerCase())
}
 phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.match(phoneno)) {
    return true;
  }
  else {
    
    return false;
  }
}
    render(){
    
      let data = [
        {
          "code": "AN",
          "label": "Select State"
          },
        {
        "code": "AN",
        "label": "Andaman and Nicobar Islands"
        },
        {
        "code": "AP",
        "label": "Andhra Pradesh"
        },
        {
        "code": "AR",
        "label": "Arunachal Pradesh"
        },
        {
        "code": "AS",
        "label": "Assam"
        },
        {
        "code": "BR",
        "label": "Bihar"
        },
        {
        "code": "CG",
        "label": "Chandigarh"
        },
        {
        "code": "CH",
        "label": "Chhattisgarh"
        },
        {
        "code": "DH",
        "label": "Dadra and Nagar Haveli"
        },
        {
        "code": "DD",
        "label": "Daman and Diu"
        },
        {
        "code": "DL",
        "label": "Delhi"
        },
        {
        "code": "GA",
        "label": "Goa"
        },
        {
        "code": "GJ",
        "label": "Gujarat"
        },
        {
        "code": "HR",
        "label": "Haryana"
        },
        {
        "code": "HP",
        "label": "Himachal Pradesh"
        },
        {
        "code": "JK",
        "label": "Jammu and Kashmir"
        },
        {
        "code": "JH",
        "label": "Jharkhand"
        },
        {
        "code": "KA",
        "label": "Karnataka"
        },
        {
        "code": "KL",
        "label": "Kerala"
        },
        {
        "code": "LD",
        "label": "Lakshadweep"
        },
        {
        "code": "MP",
        "label": "Madhya Pradesh"
        },
        {
        "code": "MH",
        "label": "Maharashtra"
        },
        {
        "code": "MN",
        "label": "Manipur"
        },
        {
        "code": "ML",
        "label": "Meghalaya"
        },
        {
        "code": "MZ",
        "label": "Mizoram"
        },
        {
        "code": "NL",
        "label": "Nagaland"
        },
        {
        "code": "OR",
        "label": "Odisha"
        },
        {
        "code": "PY",
        "label": "Puducherry"
        },
        {
        "code": "PB",
        "label": "Punjab"
        },
        {
        "code": "RJ",
        "label": "Rajasthan"
        },
        {
        "code": "SK",
        "label": "Sikkim"
        },
        {
        "code": "TN",
        "label": "Tamil Nadu"
        },
        {
        "code": "TS",
        "label": "Telangana"
        },
        {
        "code": "TR",
        "label": "Tripura"
        },
        {
        "code": "UP",
        "label": "Uttar Pradesh"
        },
        {
        "code": "UK",
        "label": "Uttarakhand"
        },
        {
        "code": "WB",
        "label": "West Bengal"
        }
        ];
        let data1 = [	 
          {
      
            "label": "Select City",
           
        },  {
      
          "label": "Mumbai",
         
      },
   {
        
          "label": "Pune",
        
      },
   {
         
          "label": "Jaipur",
         
      },
      {
         
          "label": "Surat",
        
      },
      {
        
          "label": "Lucknow",
         
      },
   {
       
          "label": "Kanpur",
         
      },
      {
        
          "label": "Nagpur",
         
      },
      {
         
          "label": "Patna",
         
      },
      {
         
          "label": "Indore",
         
      },
      {
         
          "label": "Thane",
        
      },
      {
        
          "label": "Bhopal",
          
      },
      {
        
          "label": "Visakhapatnam",
         
      },
      {
        
          "label": "Vadodara",
      },
      { 
          "label": "Firozabad",
      },]

        return(
          <ScrollView contentContainerStyle={styles.view}
         
          >
                <View >
               <View >
            
         <TextInput
     style={styles.textInput}
     placeholder="First Name*"
     placeholderTextColor="black"
     onChangeText={text =>this.setState({firstName:text})}
    />
     <TextInput
      style={styles.textInput}
      onChangeText={text =>this.setState({lastName:text})}
     placeholder="Last Name*"
     placeholderTextColor="black"
    />
     <TextInput
      style={styles.textInput}
      onChangeText={text =>this.setState({email:text})}
     placeholder="Email Address*"
     placeholderTextColor="black"
    />
     <TextInput
      style={styles.textInput}
      keyboardType='number-pad'
      onChangeText={text => this.setState({mobileNumber:text})}
     placeholder="Mobile Number*"

  maxLength={10}
     placeholderTextColor="black"
    />
   <Dropdown
        placeholder='Select State'
        data={data}
        placeholderTextColor='black'
        baseColor='black'
        value={data[this.state.selectedIndex].label}
      
        inputContainerStyle={{ borderBottomColor: 'transparent' }}
        dropdownOffset={{top: 0}}
        onChangeText={(label,index)=>this.onChangeMin(index)}
     
        pickerStyle={{
          borderRadius:15,
         width:'88%',
          height:'40%',
        marginLeft:15,
      // marginTop:100

        }}
        containerStyle = {{
         
          marginLeft:10,
          marginRight:10,
          borderWidth:1, 
          borderColor:'lightgrey', 
          borderRadius:10, 
          marginTop:10,
          paddingLeft:5
        }}
        
      />
       <Dropdown
        placeholder='Select State'
        data={data1}
        placeholderTextColor='black'
        baseColor='black'
        value={data1[this.state.selectedIndex2].label}
      
        inputContainerStyle={{ borderBottomColor: 'transparent' }}
        dropdownOffset={{top: 0}}
        onChangeText={(label,index)=>this.onChangeMin1(index)}
        useNativeDriver={true}
        pickerStyle={{
          borderRadius:15,
         width:'88%',
          height:'40%',
        marginLeft:15,
      // marginTop:100

        }}
        containerStyle = {{
         
          marginLeft:10,
          marginRight:10,
          borderWidth:1, 
          borderColor:'lightgrey', 
          borderRadius:10, 
          marginTop:10,
          paddingLeft:5
        }}
        
      />

     <TextInput
      style={styles.textInput}
      onChangeText={text => this.setState({password:text})}
     placeholder="Password*"
     secureTextEntry
     placeholderTextColor="black"
    />
     <TextInput
      style={styles.textInput}
      onChangeText={text => this.setState({confirmPassword:text})}
     placeholder="Confirm Password*"
     secureTextEntry
     placeholderTextColor="black"
    />
    
        </View>
        <View style={styles.button}>
        <Button
 onPress={this.registerUser}
  title="Register"
  color="#1E90FF"

/>
</View>

                </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  view:{
  
    justifyContent:"flex-start",
    alignItems:"center",
    
  },
textInput:{
 height: 40,
 width:300,
  borderColor: 'gray',
   borderWidth: 1,
   marginTop:15,
   marginLeft:10
},
button:{
  marginTop:15
}
});
