import React, { Component } from 'react';
//import react in our code.
import { Text, View,Image,Button } from 'react-native';
//import all the components we are going to use.
export default class About extends React.Component {
 
  static navigationOptions = {
    tabBarIcon: ()=>{
    return <Image source={require('./icons/user.png')} style={{width:20, height:20}}/> 
    }
  }
  search(){
this.props.navigation.navigate('Search')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>A propos de l'application</Text>
        <Text>Application Creé par Thabet Mongi TECHNOPC</Text>
        <Button onPress={()=>this.search()} title='Rechercher une ville'/>
      </View>
    );
  }
}

