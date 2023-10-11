import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen'
import { RegistrationScreen } from './RegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeScreen } from './HomeScreen';
const Stack = createNativeStackNavigator()
let userToken;
const retrieveData = async () => {
  try {
    userToken = await AsyncStorage.getItem('userId');
    console.log(userToken);
  } catch (error) {
    return error;
  }
};
retrieveData();
export const renderScreens = () => {
  if (typeof userToken !== 'object' && userToken !== '' && typeof userToken !== 'undefined') {
    return (
      <>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: '     Welcome Home' }} />
        <Stack.Screen
        name='SignIn'
        component={LoginScreen}
        options={{ title: 'Sign In Planner' }}
      />
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
