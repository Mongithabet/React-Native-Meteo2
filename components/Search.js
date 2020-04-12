// Setting screen
import React, { Component } from 'react';
//import react in our code.
import {  View,TextInput,Image, Button } from 'react-native';
//import all the components we are going to use.

export default class Search extends React.Component {
 
  static navigationOptions = {
    tabBarIcon: ()=>{
    return <Image source={require('./icons/home.png')} style={{width:20, height:20}}/> 
    }
  }
  constructor(props){
    super(props)
    this.state={
       city: 'Montpelier' 
    }
    
   }
   setCity=(city)=>{
       this.setState({
       city:city
       })
   }
  render() {
    return (
      <View >
        <TextInput underlineColorAndroid='transparent'
            onChangeText={(text)=>this.setCity(text)}

            style={{ height: 40,  borderColor: 'gray', borderWidth: 1 }}
           value={this.state.city}
            />
            <Button onPress={()=>{this.submit()}} title="Rechercher"/>
      </View>
    );
  }
}