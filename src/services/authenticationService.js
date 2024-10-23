import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

const authenticationService = {
  login: async (user, password) => {
    try {
      const response = await api.post('/api/Authentication/token', { user, password });
      
      const { token, refreshToken } = response.data;
      AsyncStorage.setItem('accessToken', token);
      AsyncStorage.setItem('refreshToken', refreshToken);

      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  },

  refreshToken: async (token) => {
    try {
      const response = await api.post('/api/Authentication/refresh-token', { token });
      
      AsyncStorage.setItem('accessToken', response.data.token);
      return response.data;
    } catch (error) {
      console.error('Error al refrescar el token:', error);
      throw error;
    }
  },
};

export default authenticationService;
