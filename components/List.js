import React, { Component } from 'react'
import {Image,ActivityIndicator,FlatList, View} from 'react-native'
import WeatherRow from './weather/WeatherRow'
import style from '../Style'
import axios from 'axios'

  const baseURL= 'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=bef56e8eb15020c1b87c317c6dd65b27';

export default class List extends Component {
  
static navigationOptions = ({navigation})=>{
   return{
 title:`Météo / ${navigation.state.params.city}`,
 tabBarIcon: ()=>{
  return <Image source={require('./icons/home.png')} style={{width:20, height:20}}/> 
  }
  }
}

constructor(props){ 
  super(props)
  
  this.state={
    city:this.props.navigation.state.params.city,
    report:null
  } ,
  setTimeout(()=>{
      this.fetchWeather()
     
  },1000)

}

  

      fetchWeather(){
            
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&cnt=10&appid=438d986fa23c08fc2e6dea39bc27ee54`)
      .then((response) => {
     this.setState({report: response.data})
       }).catch(error => {
        console.log(error);
      });
      } 
    
    
    
    render() {

      if(this.state.report === null){
        return (
        <ActivityIndicator color={style.color} size="large"/>
          )
          }else
          {
  
              return (

<View>
        <FlatList
          data={this.state.report.list}
          
          renderItem={({item,index}) => <WeatherRow day={item.main.temp} day2={item.dt} day3={item} index={index} />}

        /> 
  </View>

            )
        }
  }
}