import axios from 'axios';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // clear error
  }
  console.log('Done.')
}
export const retrieveData = async () => {
  try {
    userValue = await AsyncStorage.getItem('userId');
    if (userValue !== null) {
      return userValue;
    } else {
      return "not found";
    }
  } catch (error) {
    console.log(error);
    return error;
    // Error retrieving data
  }
};
export const registerUser = ({ email, password, name, gender, age }) => {
  axios.post('http://10.0.2.2:3000/api/registerUser', {
    //for any andorid system localhost is 10.0.2.2 so istead of localhost we need to replace it by 10.0.2.2 url became http://10.0.2.2:3000/api/registerUser
    email: email,
    password: password,
    name: name,
    gender: gender,
    age: age,
  }).then(function (response) {
    // handle success
    console.log(JSON.stringify(response.data));
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
}

export const storeData = async (userId) => {
  const userid = userId;
  
};

export const loginUser = async ({ email, password }) => {
  await axios.post('http://10.0.2.2:3000/api/getloggedInUser', { email: email, password: password }).then(function (response) {
    // handle success
    const userId =  response.data._id;
    async (userId)=>{
      try {
        await AsyncStorage.setItem('userId', userId);
        const H = retrieveData();
        console.log("H");
      } catch (error) {
        console.log(error);
      }
    }
    return userId;
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
};

export const getUserById = ({id}) => {
  axios.post('http://10.0.2.2:3000/api/getUserById', { _id:id }).then(function (response) {
    // handle success
    const count = response.data;
    console.log(count);
    return count;
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
};