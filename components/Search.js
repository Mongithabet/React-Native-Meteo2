// Setting screen
import React, { Component } from 'react';
//import react in our code.
import {  View,TextInput,Image, Button,Keyboard } from 'react-native';
//import all the components we are going to use.
import style from '../Style'
import {createStackNavigator} from 'react-navigation-stack';
 import List from './List'
class Search extends React.Component {

    static navigationOptions = ()=>{
      return{
        title:'Rechercher une ville',
    tabBarIcon: ()=>{
     return <Image source={require('./icons/home.png')} style={{width:20, height:20}}/> 
     }
     }
   
      
      
  }
  constructor(props){
    super(props)
    this.state={
       city: 'Gabes' 
    }
    
   }
   setCity=(city)=>{
       this.setState({
       city:city
       })
   }
   submit(){
     Keyboard.dismiss()
     this.props.navigation.navigate('Result',{city:this.state.city})

   }  
  render() {
    return (
      <View style={style.container} >
        <TextInput underlineColorAndroid='transparent'
            onChangeText={(text)=>this.setCity(text) }
            onSubmitEditing={()=>this.submit()}
            style={style.input}

           value={this.state.city}
            />
            <Button  color={style.color} onPress={()=>{this.submit()}} title="Rechercher"/>
      </View>
    );
  }
}
const  navigationOptions={ 
   
  headerStyle:style.header,
  headerTitleStyle:style.headerTitle,
  
}
export default createStackNavigator({
  Search:{
    screen:Search,
    navigationOptions,
   
  }, 
  Result:
  {
    screen:List,
    navigationOptions
  },
 
 
 
})