import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen'
import { RegistrationScreen } from './RegistrationScreen';
import { HomeScreen } from './HomeScreen';
import { NavigateButton } from "./NavigateButton";
import { CreateTask } from '../components/CreateTask';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from "react";
export const ContextApi = createContext()
/////////////////////////////////////////
const Stack = createNativeStackNavigator();
export const MainNavigator = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      setData(res)
    })

  }, [data])

  const headerLeft = () => (<NavigateButton title='LOGOUT' route='SignIn' />)
  const headerRight = () => (<NavigateButton title='Add Task' route='CreateTask' />)

  return (
    <ContextApi.Provider value={{ data, setData }}>
      <NavigationContainer>
        <Stack.Navigator>{data == null ?
          (
            <>
              <Stack.Screen name='SignIn' component={LoginScreen} options={{ title: 'Sign In Planner' }} />
              <Stack.Screen name='SignUp' component={RegistrationScreen} options={{ title: 'Registration In Planner' }} />
            </>
          )
          :
          (
            <>
              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: '     Welcome Home', headerRight, headerLeft }} />
              <Stack.Screen name='CreateTask' component={CreateTask} options={{ title: '           Create Tasks', headerLeft }} />
            </>
          )
        }
        </Stack.Navigator>
      </NavigationContainer>
    </ContextApi.Provider>

  )
}
