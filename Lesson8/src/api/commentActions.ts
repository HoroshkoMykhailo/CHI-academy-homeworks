import axiosInstance from "./axiosInstance";

export const getComments = async (id: number) => {
    const response = await axiosInstance.get(`/api/exhibits/${id}/comments/`);
    return response.data;
};

export const writeComment = async (id: number, text: string) => {
    const response = await axiosInstance.post(`/api/exhibits/${id}/comments/`, { text });
    return response.data;
};