import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


export const Task = ({ task, onDeleteClick, navigation}) => {
  const onEditClick = async (task)=>{
   const selectedTaskDetails ={
    id :task._id,
    title:task.title,
    assignTo:task.assignTo,
    taskStatus:task.taskStatus,
    discription:task.discription,
    createdAt:task.createdAt
   }
    await navigation.navigate('CreateTask', {paramKey: selectedTaskDetails});
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Title: {task.title}</Text>
        <Text style={styles.aggignUser}> Assigned User: {task.assignTo}</Text>
        <Text style={(task.taskStatus == 'OnHold') ? styles.statusOnhold : (task.taskStatus == 'InProgress') ? styles.statusInprogress : (task.taskStatus == 'Completed') ? styles.statusCompleted : styles.status}> Status: {task.taskStatus}</Text>
        <Text style={styles.discription}> Discription: {task.discription}</Text>
        <Text style={styles.date}> Start Date: {new Date(task.createdAt).getDate()+"/"+new Date(task.createdAt).getMonth()+"/"+new Date(task.createdAt).getFullYear()+ "  "+new Date(task.createdAt).getHours()  +":"+new Date(task.createdAt).getMinutes()+":"+new Date(task.createdAt).getSeconds() }</Text>
        <Text style={styles.date}> End Date: {(task.taskStatus == 'Completed') ? new Date(task.completedAt).getDate()+"/"+new Date(task.completedAt).getMonth()+"/"+new Date(task.completedAt).getFullYear()+ "  "+new Date(task.completedAt).getHours()  +":"+new Date(task.completedAt).getMinutes()+":"+new Date(task.completedAt).getSeconds() : "NA(Task is not completed)"}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
          <View style={styles.btn}>
            <Button title='Delete' onPress={() => onDeleteClick(task)} />
          </View>
          <View>
            <Button style={styles.btn} title='   Edit    '  onPress={() => onEditClick(task)}/>
          </View>
        </View>
      </View>
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
  card: {
    width: 320,
    shadowColor: 'black',
    shadowOffset: { height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    margin: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  statusInprogress: {
    marginTop: 7,
    marginBottom: 7,
    fontSize: 17,
    backgroundColor: '#FBFB07'
  },
  statusCompleted: {
    marginTop: 7,
    marginBottom: 7,
    fontSize: 17,
    backgroundColor: '#24FA07'
  },
  statusOnhold: {
    marginTop: 7,
    marginBottom: 7,
    fontSize: 17,
    backgroundColor: '#FA0F0F'
  },
  status: {
    marginTop: 7,
    marginBottom: 7,
    fontSize: 17,
    backgroundColor: '#31F0EA'
  },
  discription: {
    marginBottom: 10,
    fontSize: 15
  },
  aggignUser: {
    marginTop: 10,
    fontSize: 18,
    fontWeight:'bold'
  },
  date: {
    marginBottom: 10,
    fontSize: 13,
    fontWeight:'bold'
  },
  btn: {
    marginRight: 10
  }
})
