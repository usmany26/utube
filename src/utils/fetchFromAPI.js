import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
    order: "date",
    regionCode: "US",
  },
  headers: {
    "X-RapidAPI-Key": "4f42922c9bmshe92951410504dc8p1b8c76jsne50743a8039b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
