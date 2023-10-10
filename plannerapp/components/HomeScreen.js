import React from 'react'
import { View,Text ,Button,StyleSheet} from 'react-native'
import { TaskList } from './tasks/TaskList'
import { clearAll } from '../Methods/Users/methods'
export const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <TaskList navigation={navigation}/>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});