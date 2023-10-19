// import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { defaultColors } from './styles/defaultStyles'
import { login } from '../userContext/actions/auth';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSignUp = () => navigation.navigate('SignUp')
  const dispatch = useDispatch();
  /*const onSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all details!!");
    } else {
      const login = async ({ email, password }) => {
        await axios.post('http://10.0.2.2:3000/api/getloggedInUser', { email: email, password: password }).then(response => {
          if (response.status == 200) {
            AsyncStorage.setItem('token', JSON.stringify(response.data)).then(_res => { console.log("first") })
          }
        }).catch(function (error) {
          // handle error
          console.log(error);
        });
      };
      await login({ email, password });
      navigation.navigate("HomeScreen");
    }
  }*/
  const onLogin = () => {
    let user = {
      username: email,
      password: password,
    }
    dispatch(login(user))
      .then((response) => {
        if (response.status == "success") {
          navigation.navigate("HomeScreen");
        }
      })
      .catch((error) => {
        navigation.replace("SignIn");
      });
  };
  const onSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all details!!");
    } else {
      onLogin()
    }
  }
  // render login form
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/loginImg.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Your Email'
          placeholderTextColor={defaultColors.placeholder}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Your Password'
          placeholderTextColor={defaultColors.placeholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={onSignUp}>Don't have an account? Click here to sign in </Text>
      </TouchableOpacity>
      <Button title='Sign In' onPress={onSignIn} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3fccd1",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 10,
    marginTop: 20,
  },
  highlight: {
    fontWeight: '700',
  },
  inputView: {
    backgroundColor: "#e6eff0",
    borderRadius: 20,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 40,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC0CB",
  },
});
