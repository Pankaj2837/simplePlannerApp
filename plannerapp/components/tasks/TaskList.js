import React, { useState } from 'react'
import { Text, View, SafeAreaView, FlatList,Button, StyleSheet, ActivityIndicator } from 'react-native'
import { defaultStyles } from '../styles/defaultStyles'
import { Task } from './Task'

import { defaultColors } from '../styles/defaultStyles'
import { clearAll } from '../../Methods/Users/methods'
// const toggleChecked = ({ _id, checked }) => Meteor.call('tasks.setIsChecked', { _id, checked })
// const deleteTask = ({ _id }) => Meteor.call('tasks.remove', { _id })

export const TaskList = ({navigation}) => {
  const handleLogOut =()=>{
    clearAll();
    navigation.navigate("SignIn");
  }
  const tasks =[];
  return (
    <SafeAreaView style={styles.container}>
      <View style={defaultStyles.container}>
        <View>
          <Text>My Tasks</Text>
          <Button title ="LogOut" color={defaultColors.primary} onPress={handleLogOut}/>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width:'120%',
    backgroundColor: "#3fccd1",
    alignItems: "center",
    justifyContent: "center",
    height: '105%'
  }
});