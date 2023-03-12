import axios from 'axios';

export const COURSES_API = import.meta.env.VITE_COURSES_API;
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API;

export const api = axios.create();
api.interceptors.response.use((response) => {
    return response.data;
});
