import React, { useState } from 'react'
import { TextInput, Button,Image,StyleSheet,Text,View} from 'react-native'
import { defaultColors } from './styles/defaultStyles'
import { registerUser } from '../Methods/Users/methods';

export const RegistrationScreen = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [age, setAge] = useState()
  const [password, setPassword] = useState()
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const ageRegex=/^(1[0-9]|[2-9]\d)$/;
  const genderRegex = /^(?:m|M|male|Male|f|F|female|Female)$/;
  const onSignUp = () =>{
    if(!email || !password || !name || !gender || !age){
      alert("Please fill all details!!")
    }else if(emailRegex.test(email)==false){
      alert("Enter valid email-id !!")
    }else if(passwordRegex.test(password) == false){
      alert("Password must be 8 charecter long. \n It contain atleast one uppercase latter. \n It contain atleast one lowercase latter.\n It contain atleast one special charecter. \n It contain atleast one number.")
    }else if(ageRegex.test(age) == false){
      alert("Enter valid age !!")
    }else if(genderRegex.test(gender) == false){
      alert("Enter valid gender !!")
    }else{
      registerUser({email,password,name,gender,age});
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/loginImg.png")} />
      <View style={styles.inputView}>
      <TextInput
        placeholder='Your Email'
        placeholderTextColor={defaultColors.placeholder}
        style={styles.TextInput}
        value={email}
        onChangeText={setEmail}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder='Your password'
        placeholderTextColor={defaultColors.placeholder}
        style={styles.TextInput}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder='Your name'
        placeholderTextColor={defaultColors.placeholder}
        style={styles.TextInput}
        value={name}
        onChangeText={setName}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder='Your gender'
        placeholderTextColor={defaultColors.placeholder}
        style={styles.TextInput}
        value={gender}
        onChangeText={setGender}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder='Your age'
        placeholderTextColor={defaultColors.placeholder}
        style={styles.TextInput}
        value={age}
        onChangeText={setAge}
      />
      </View>
      <Button style={styles.forgot_button} title='Create new account' onPress={onSignUp} />
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
      marginTop: 50,
  },
  highlight: {
      fontWeight: '700',
  },
  inputView: {
      backgroundColor: "#e6eff0",
      borderRadius: 20,
      width: "80%",
      height: 45,
      marginBottom: 10,
      alignItems: "center",
  },
  TextInput: {
      height: 40,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  },
  forgot_button: {
      marginBottom: 30,
  },
  loginBtn: {
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFC0CB",
  },
});