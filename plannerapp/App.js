import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './components/LoginScreen';
import {RegistrationScreen} from './components/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='SignIn'
          component={LoginScreen}
          options={{ title: 'Sign in to awesome-app' }}
        />
        <Stack.Screen
          name='SignUp'
          component={RegistrationScreen}
          options={{ title: 'Register to awesome-app' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
