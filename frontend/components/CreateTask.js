import axios from 'axios'
import React, { useState } from 'react'
import { TextInput, Button, Image, StyleSheet, View } from 'react-native'
import { defaultColors } from './styles/defaultStyles'
import SelectDropdown from 'react-native-select-dropdown'
import { createNewTask, updateTask } from '../Methods/Users/methods'
export const CreateTask = ({ navigation, route }) => {
  const [title, setTitle] = useState()
  const [assignTo, setAssignTo] = useState()
  const [discription, setDiscription] = useState()
  const [taskStatus, setTaskStatus] = useState()
  const status = ["InProgress", "OnHold", "Pendding", "Completed"];
  let finalUsersList = [];
  const getAllUsers = async () => {
    await axios.get('http://10.0.2.2:3000/api/tasks/getAllUsers').then(function (response) {
      // handle success
      response.data.map((user) => {
        finalUsersList.push(user.name);
      });
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  getAllUsers();

  const handleSubmit = (e) => {
    createNewTask({ title, assignTo, discription, taskStatus });
    setTitle("");
    setAssignTo("");
    setDiscription("");
    setTaskStatus("");
    navigation.navigate('HomeScreen');
  }
  let _id = "";
  if (route.params !== undefined && route.params !== " ") {
    _id = route.params.paramKey.id;
  }
  const handleUpdate = () => {
    console.log("id "+_id);
    if(_id){
      try{
        updateTask({ _id,title, assignTo, discription, taskStatus });
      }catch(err){
        console.log(err);
      }
    }else{
      console.log("Id not present to update the task");
    }
    setTitle("");
    setAssignTo("");
    setDiscription("");
    setTaskStatus("");
    navigation.navigate('HomeScreen');
  }

  if (route.params !== undefined && route.params !== "") {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/addtask.png")} />
        <View style={styles.inputView}>
          <TextInput
            placeholder='Task title'
            placeholderTextColor={defaultColors.placeholder}
            style={styles.TextInput}
            defaultValue={route.params.paramKey.title}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder='Assigned user'
            placeholderTextColor={defaultColors.placeholder}
            style={styles.TextInput}
            defaultValue={route.params.paramKey.assignTo}
            value={assignTo}
            onChangeText={setAssignTo}
            readOnly
          />
        </View>
        <View style={styles.inputView}>
          <SelectDropdown
            defaultButtonText="task status"
            buttonTextStyle={(setTaskStatus == '' || setTaskStatus == undefined) ? btndrop : btndrop1}
            buttonStyle={btnScrdrop}
            data={status}
            defaultValue={route.params.paramKey.taskStatus}
            value={taskStatus}
            onChangeText={setTaskStatus}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              setTaskStatus(selectedItem)
              return taskStatus
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder='Task discription'
            placeholderTextColor={defaultColors.placeholder}
            style={styles.TextInput}
            defaultValue={route.params.paramKey.discription}
            value={discription}
            onChangeText={setDiscription}
          />
        </View>
        <Button style={styles.forgot_button} title='Update This Task' onPress={handleUpdate} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/addtask.png")} />
      <View style={styles.inputView}>
        <TextInput
          placeholder='Task title'
          placeholderTextColor={defaultColors.placeholder}
          style={styles.TextInput}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.inputView}>
        <SelectDropdown
          defaultButtonText="Assign to user"
          buttonTextStyle={btndrop}
          buttonStyle={btnScrdrop}
          data={finalUsersList}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            setAssignTo(selectedItem)
            return assignTo
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
      </View>
      <View style={styles.inputView}>
        <SelectDropdown
          defaultButtonText="Select status of task"
          buttonTextStyle={btndrop}
          buttonStyle={btnScrdrop}
          data={status}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            setTaskStatus(selectedItem)
            return taskStatus
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder='Task discription'
          placeholderTextColor={defaultColors.placeholder}
          style={styles.TextInput}
          value={discription}
          onChangeText={setDiscription}
        />
      </View>
      <Button style={styles.forgot_button} title='Create new Task' onPress={handleSubmit} />
    </View>
  )
}
const btndrop = {
  color: '#8a8a8a',
  fontWeight: 'light',
  fontSize: 15,
  paddingLeft: 45
}
const btndrop1 = {
  color: '#030303',
  fontSize: 14,
  paddingLeft: 45,
}
const btnScrdrop = {
  height: 40,
  flex: 1,
  padding: 10,
  marginLeft: 20,
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