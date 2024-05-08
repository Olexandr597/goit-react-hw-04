import axios from "axios";

const API_KEY = "IZrplnJNGxhPendLiZk3ALlq1OXfbLCALFWgb3aRWCU";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  client_id: API_KEY,
});

const fetchData = async (query, page) => {
  const { data } = await instance.get(
    `search/photos/?client_id=IZrplnJNGxhPendLiZk3ALlq1OXfbLCALFWgb3aRWCU&query=${query}&page=${page}&per_page=12`
  );
  return data;
};

export default fetchData;
