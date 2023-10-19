import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const logIn = async (user) => {
    console.log("user info", user);
    const { email, password } = user;
    async () => {
        await axios.post('http://10.0.2.2:3000/api/getloggedInUser', { email: email, password: password }).then(response => {
            if (response.status == 200) {
                console.log(response.data);
                AsyncStorage.setItem('user', JSON.stringify(response.data)).then(_res => { console.log("first") })
            }
        }).catch(function (error) {
            // handle error
            console.log(error);
        });
    };
    return {
        status: "success",
        message: "You are redirecting to home page",
        user: email,
    };
};
const logOut = async () => {
    AsyncStorage.clear();
    return {
        status: "success",
        message: "You are logged out",
    };
};
export default { logIn, logOut };