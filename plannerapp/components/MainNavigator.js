import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { RegistrationScreen } from './RegistrationScreen'
import { NavigateButton } from '../components/NavigateButton'
import { CreateTask } from './CreateTask'
import { CreateGroup } from './Groups/CreateGroup'
const Stack = createNativeStackNavigator()

export const MainNavigator = () => {
  const { userToken } = state

  const renderScreens = () => {
    if (userToken) {
      // only authenticated users can visit these screens
      // const headerLeft = () => (<NavigateButton title='My profile' route='Profile' />)
      const headerRight = () => (<NavigateButton title='Add Task' route='CreateTask' />)
      return (
        <>
        <Stack.Screen name='CreateGroups' component={CreateGroup} options={{ title: 'Create Groups' }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ title: '     Welcome Home',headerRight }} />
          {/* <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Your Profile' }} /> */}
          <Stack.Screen name='CreateTask' component={CreateTask} options={{ title: 'Create Task' }} />
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

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}>
          {renderScreens()}
        </Stack.Navigator>
      </NavigationContainer>
  )
}
