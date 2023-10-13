import React, { useReducer, useState, useContext } from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { Task } from './Task'
import axios from 'axios'
import { defaultStyles } from '../styles/defaultStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteOneTask } from '../../Methods/Users/methods'
export const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState();
  const [tasksCount, setTasksCount] = useState();
  // let { userToken } = useReducer(userContext);
  // async () => {
  //   try {
  //     const userValue = await AsyncStorage.getItem('userId');
  //     if (userValue !== null) {
  //       userToken = userValue;
  //     } else {
  //       userToken = "";
  //     }
  //   } catch (error) {
  //     return error;
  //   }
  // };
  const getAlltask = async () => {
    await axios.get('http://10.0.2.2:3000/api/tasks/getAllTasks').then(function (response) {
      // handle success
      setTasks(response.data.data);
      setTasksCount(response.data.tasksCount);
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  };
  getAlltask();
  // console.log(userToken);
  // const tasksData = [];
  // if (!userToken) {
  //   return tasksData
  // }


  const TasksTitle = `${tasksCount ? ` (${tasksCount})` : ''}`
  const deleteTask =(task)=>{ const id = task._id ; deleteOneTask({ id })};
  return (
    <SafeAreaView style={styles.container}>
      <View style={defaultStyles.container}>
        <View>
          <Text>My Tasks {TasksTitle}</Text>
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item: task }) => (
            <Task
              task={task}
              navigation={navigation} 
              onDeleteClick={deleteTask}
              />
          )}
          keyExtractor={task => task._id}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '120%',
    backgroundColor: "#3fccd1",
    alignItems: "center",
    justifyContent: "center",
    height: '105%'
  }
});