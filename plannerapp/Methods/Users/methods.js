import axios from 'axios';
export const registerUser =({email,password,name,gender,age}) => {
    axios.post('http://127.0.0.1:3000/api/registerUser', {
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