import axios from 'axios';
import { useUserStore } from '@/stores/userStore'

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    // 'Authorization': `Bearer YOUR_AUTH_TOKEN`
  }
});

// You can also add interceptors to this instance
apiClient.interceptors.request.use(config => {
  const userStore = useUserStore()

  const token = userStore.user.token

  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  // Logic before request is sent (e.g., refreshing token)
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiClient;
