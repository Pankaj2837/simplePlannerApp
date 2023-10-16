import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { defaultColors } from './styles/defaultStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const NavigateButton = ({ title, route }) => {
  const navigation = useNavigation()
  if (title == 'LOGOUT' && route == 'SignIn') {
    AsyncStorage.removeItem('token')
    return (
      <Button
        title={title}
        color={defaultColors.primary}
        onPress={() => navigation.navigate(route)}
      />
    )
  } else {
    return (
      <Button
        title={title}
        color={defaultColors.primary}
        onPress={() => navigation.navigate(route)}
      />
    )
  }
}
