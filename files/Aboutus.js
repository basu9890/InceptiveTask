import React from "react";
import {

  StyleSheet,
  View,
  Text,

} from 'react-native';

export default class Aboutus extends React.Component{

    render(){
        return(
            <View style={styles.view}>
                <Text>Happy People </Text>
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