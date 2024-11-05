import { Exhibit, ExhibitsResponse } from '~/types/types';
import axiosInstance from './axiosInstance';

export const fetchExhibits = async (page: number, limit: number): Promise<ExhibitsResponse> => {
  const response = await axiosInstance.get(`/api/exhibits?page=${page}&limit=${limit}`);
  return response.data;
};

export const fetchExhibitById = async (id: number): Promise<Exhibit> => {
  const response = await axiosInstance.get(`/api/exhibits/${id}`);
  return response.data;
};