import ApiUrl from './apiconstant';
import axios from 'axios';
import {getUserData} from './localStorage';

export const getApiData = async endpoint => {
  try {
    const response = await axios.get(`${ApiUrl.baseUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};

const userData = getUserData();

export const AnimationClient = axios.create({
  baseURL: ApiUrl.baseUrl,
  timeout: 10000,
  headers: {Authorization: `Bearer ${userData}`},
});



// Function to make a POST request
export const postApiData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${ApiUrl.baseUrl}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};
