import { 
    loginRequest, loginSuccess, loginFail, 
    registerRequest, registerSuccess, registerFail, 
    isLoginRequest, isLoginSuccess, isLoginFail 
} from '../slices/UserSlice';

import { toast } from 'react-toastify';
import axios from 'axios';

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(loginRequest());

        const { data } = await axios.post('http://localhost:5000/api/login', userData);

        dispatch(loginSuccess());
        localStorage.setItem('accesstoken', data.token);
        toast.success("Login Successful!");
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Login failed!";
        dispatch(loginFail(errorMessage));
        toast.error(errorMessage);
    }
};

export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch(registerRequest());

        const { data } = await axios.post('http://localhost:5000/api/register', userData);

        dispatch(registerSuccess());
        localStorage.setItem('accesstoken', data.token);
        toast.success(data.message);
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Registration failed!";
        dispatch(registerFail(errorMessage));

        if (errorMessage.includes("duplicate")) {
            toast.error("User already exists");
        } else {
            toast.error(errorMessage);
        }
    }
};

export const IsLogin = () => async (dispatch) => {
    try {
        dispatch(isLoginRequest());

        const token = localStorage.getItem('accesstoken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const { data } = await axios.get('http://localhost:5000/api/isLogin', config);

        dispatch(isLoginSuccess(data));
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Failed to check login status!";
        dispatch(isLoginFail(errorMessage));
    }
};
