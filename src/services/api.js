import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authenticationService from './authenticationService';

const api = axios.create({
  baseURL: 'http://localhost:8082', // Cambiar aqui ""
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error al obtener el token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response ? error.response.status : null;

    // Si el token ha expirado (por ejemplo, status 401), intentamos refrescar el token
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await authenticationService.refreshToken(refreshToken);

        // Guardar el nuevo token en AsyncStorage
        await AsyncStorage.setItem('accessToken', response.token);

        // Repetir la solicitud original con el nuevo token
        originalRequest.headers['Authorization'] = `Bearer ${response.token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Error al refrescar el token:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default api;
