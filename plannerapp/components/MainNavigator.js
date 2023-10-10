import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './LoginScreen'
import {RegistrationScreen} from './RegistrationScreen';
import {HomeScreen} from './HomeScreen';
import { retrieveData, getUserById } from '../Methods/Users/methods';
const Stack = createNativeStackNavigator()
let id;
  let userToken;
  id = retrieveData();
  if(typeof id !== 'object' && id !==null && id !=='' ){
    const n = getUserById({id});
    if(typeof n != 'undefined'){
      userToken = id;
    }else{
      userToken =null;
    }

  }else{
    userToken ="";
  }
  export const renderScreens = () => {
    if (typeof userToken !=='object' && userToken !=='' && userToken !==undefined ) {
      return (
        <>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: '     Welcome Home'}} />
        </>
      )
    }
    return (
      <>
        <Stack.Screen
          name='SignIn'
          component={LoginScreen}
          options={{ title: 'Sign In Planner' }}
        />
        <Stack.Screen
          name='SignUp'
          component={RegistrationScreen}
          options={{ title: 'Registration In Planner' }}
        />
      </>
    )
  }
export const MainNavigator = () => {
  
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {renderScreens()}
        </Stack.Navigator>
      </NavigationContainer>
  )
}
