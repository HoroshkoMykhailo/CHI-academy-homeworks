import { type registerUserResponse, type loginUserResponse } from '~/types/types';
import axiosInstance from './axiosInstance';

export const registerUser = async (username: string, password: string): Promise<registerUserResponse> => {
    const response = await axiosInstance.post('/users/register', { username, password });
    return response.data;
};

export const loginUser = async (username: string, password: string): Promise<loginUserResponse> => {
    const response = await axiosInstance.post('/api/auth/login', { username, password });
    return response.data;
};