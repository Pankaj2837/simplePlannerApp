import React, { useState } from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { defaultStyles } from '../styles/defaultStyles'

// const toggleChecked = ({ _id, checked }) => Meteor.call('tasks.setIsChecked', { _id, checked })
// const deleteTask = ({ _id }) => Meteor.call('tasks.remove', { _id })

export const TaskList = ({navigation}) => {
  const tasks =[];

  return (
    <SafeAreaView style={styles.container}>
      <View style={defaultStyles.container}>
        <View>
          <Text>My Tasks</Text>
        </View>
        <FlatList 
          data={tasks}
          renderItem={({ item: task }) => (
            <Task
              task={task}
              navigation={navigation}/>
          )}
        />
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