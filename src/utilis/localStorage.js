import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserData = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem('USER_DATA').then(data => {
      const dataJson = JSON.parse(data);
      resolve(dataJson);
    });
  });

const setUserData = data =>
  new Promise((resolve, reject) => {
    const dataString = JSON.stringify(data);
    AsyncStorage.setItem('USER_DATA', dataString)
      .then(() => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });

export {getUserData, setUserData};
