import React from 'react';
import { Image,TouchableOpacity,
  Text} from 'react-native';
import { createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createDrawerNavigator, DrawerActions} from "react-navigation-drawer";
import HomePage from './files/HomePage';
import Aboutus from './files/Aboutus'
import RegistrationScreen from './files/RegistrationScreen';

const HomeStack = createStackNavigator(
  {
    Home1: { screen: HomePage },
 
  },{
    defaultNavigationOptions:({navigation})=> {
     
      return {  
        headerLeft: (  
        
          <TouchableOpacity style={{marginLeft:5}} onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
          source={require('./files/menu.png')}
          style={{height:40,width:40}}
           
          />
          </TouchableOpacity>
      )  ,
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      tabBarVisible:false,
     
  
      headerTintColor: '#FFFFFF',
     
    
  }
}
  }
)
const AboutusStack = createStackNavigator(
  {
    about: { screen: Aboutus },
  
  }
  ,{
    defaultNavigationOptions:({navigation})=> {
     
      return {  
        headerLeft: (  
        
          <TouchableOpacity style={{marginLeft:5}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
         <Image
          source={require('./files/menu.png')}
          style={{height:40,width:40}}
           
          />
          </TouchableOpacity>
      )  ,
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      tabBarVisible:false,
     
  
      headerTintColor: '#FFFFFF',
     
    
  }
}
  }
)
const RegisterStack = createStackNavigator(
  {
    
    Navigate:{screen:RegistrationScreen},
  },{
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTintColor: '#FFFFFF',
      title: 'Registration',
  }
  }
)

const AppDrawerNavigator = createDrawerNavigator({
 
  Home: {
    screen: HomeStack,
 
  },
  AboutUs: {
    screen: AboutusStack,
 
  }
}
  
  );


  const MainNavigator= createSwitchNavigator(
  
    { 
 
     landingPage:RegisterStack,
      home:HomeStack,
      drawer:AppDrawerNavigator

    },
    {
      initialRouteName:'landingPage',
    },
  
  );

  export default createAppContainer(MainNavigator);
  


