import { Button } from 'react-native'
import { useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native'
import { defaultColors } from './styles/defaultStyles'
import { logout } from '../userContext/actions/auth'


export const NavigateButton = ({ title, route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.status === "success") {
        navigation.replace("SignIn");
      }
    });
    console.log("Logged out in successfully");
  };
  if (title == 'LOGOUT' && route == 'SignIn') {
    return (
      <Button
        title={title}
        color={defaultColors.primary}
        onPress={onLogout}
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
