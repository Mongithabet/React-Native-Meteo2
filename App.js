
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import About from './components/About'
import Search from './components/Search'
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export

const TabScreen = createMaterialTopTabNavigator(
  {
    Search: { screen: Search },
    About: { screen: About },

  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon:true,
      showLabel: true,
      style: {
        backgroundColor: '#a2273C',
        borderTopWidth:1,
        borderColor:'#3f101c',
        indicatorStyle:{
          height:2,
         backgroundColor:'#FFF'
        }
      },
      
    },
  }
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'TECHNOPC',
      
    },
  },
});
export default createAppContainer(App);