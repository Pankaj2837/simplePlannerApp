import { createContext } from "react";
let userToken;
const retrieveData = async () => {
    try {
      const userValue = await AsyncStorage.getItem('userId');
      console.log(userValue);
      if (userValue !== null) {
        userToken= userValue;
      } else {
        userToken = "";
      }
    } catch (error) {
      return error;
    }
  };
  retrieveData();
export const userContext = createContext(userToken);