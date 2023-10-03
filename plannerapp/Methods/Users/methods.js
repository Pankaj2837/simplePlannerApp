import axios from 'axios';
export const registerUser =({email,password,name,gender,age}) => {
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