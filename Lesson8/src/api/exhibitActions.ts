import axiosInstance from './axiosInstance';
import { User } from './userActions';

export interface Exhibit {
    id: number;
    imageUrl: string;
    description: string;
    user: User;
    commentCount: number;
    createdAt: string;
  }

export const fetchExhibits = async (): Promise<Exhibit[]> => {
    const response = await axiosInstance.get('/api/exhibits');
    return response.data.data;
  };
  
  export const fetchExhibitById = async (id: number): Promise<Exhibit> => {
    const response = await axiosInstance.get(`/api/exhibits/${id}`);
    return response.data;
  };