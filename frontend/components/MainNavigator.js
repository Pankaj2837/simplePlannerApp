import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen'
import { RegistrationScreen } from './RegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeScreen } from './HomeScreen';
import { useState } from 'react';
import { NavigateButton } from "./NavigateButton";
import { userContext } from '../userContext/userContext';
/////////////////////////////////////////

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const headerLeft = () => (<NavigateButton title='My profile' route='Profile' />)
  const headerRight = () => (<NavigateButton title='Add Task' route='CreateTask' />)
  const [userToken, setUserToken] = useState("");
  const retrieveData = async () => {
    try {
      const user = await AsyncStorage.getItem('userId');
      setUserToken(user);
    } catch (error) {
      return error;
    }
  };
  retrieveData();
  return (
    <userContext.Provider value={userToken}>
      <>
        <NavigationContainer>
          <Stack.Navigator>
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
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: '     Welcome Home', headerRight, headerLeft }} />

          </Stack.Navigator>
        </NavigationContainer>
      </>
    </userContext.Provider>
  )
}
