import axios from 'axios';

// export const apiClient = axios.create({
//     baseURL: 'https://backoffice.intouchbiz.com/api'
// });

export const getUserData = (value) => {
  const query = `?fields=id,name,email`;
  return new Promise((resolve, reject) => {
    axios
      .get(`https://backoffice.intouchbiz.com/api/getCustomer/1` + query)
      .then(({ data }) => {
        console.log("data", data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};