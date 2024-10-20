import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

const authenticationService = {
  login: async (user, password) => {
    try {
      const response = await api.post('/api/Authentication/token', { user, password });
      
      // Almacenar el accessToken y refreshToken en AsyncStorage
      const { token, refreshToken } = response.data;
      AsyncStorage.setItem('accessToken', token);
      AsyncStorage.setItem('refreshToken', refreshToken);

      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  },

  // Método para refrescar el token
  refreshToken: async (token) => {
    try {
      const response = await api.post('/api/Authentication/refresh-token', { token });
      
      // Actualizar el accessToken
      AsyncStorage.setItem('accessToken', response.data.token);
      return response.data;
    } catch (error) {
      console.error('Error al refrescar el token:', error);
      throw error;
    }
  },
};

export default authenticationService;
