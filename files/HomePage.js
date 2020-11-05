import * as React from "react";
import {

  StyleSheet,
  TouchableOpacity,
  View,
  Text,

} from 'react-native';

export default class HomePage extends React.Component{
    
    static navigationOptions =({navigation}) =>  {  
   
     
        return {
        title: 'Home', 
        headerRight:
        <View>
          
            <TouchableOpacity style={{marginRight:15}} onPress={navigation.getParam('updatePassword')}>
            <Text style={{color:"white"}}>Logout</Text>
            </TouchableOpacity>
            </View>  ,
           
        
      }
    }; 

    componentDidMount() {
        this.props.navigation.setParams({ updatePassword: this.logOut});
      }
      logOut=()=>{
         this.props.navigation.navigate("landingPage");
      }
    render(){
        return(
                <View style={styles.view}>
                    <Text>
                        Hello {this.props.navigation.getParam("name")   }
                    </Text>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    view:{
    
      justifyContent:"center",
      alignItems:"center",
      
    },
  
  });