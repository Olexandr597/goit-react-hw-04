import axios from "axios";

const API_KEY = 'i9wbXvFd-cu6QxKyhooRASCj8VWy50rtQG-9BbauSY4';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

export const getPhotos = async (query, page = 1, per_page = 20) => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};



// const instance = axios.create({
//   baseURL: "https://api.unsplash.com",
// });

// const API_KEY = 'i9wbXvFd-cu6QxKyhooRASCj8VWy50rtQG-9BbauSY4';

// instance.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

// export const getPhotos = async( query, page ) => {

//         const {data} = await instance.get(`/search/photos?page=${page}&query=${query}&per_page=${20}`)

//     return data;
// } 



