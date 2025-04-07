import {Platform} from 'react-native';

export const BASE_URL =
  Platform.OS == 'android'
    ? 'http://10.0.2.2:3000'
    : 'http://localhost:3000';


// For Physical device
// use your network ip
// export const BASE_URL = 'http://192.168.0.100:3000'; // Replace with your actual IP address

