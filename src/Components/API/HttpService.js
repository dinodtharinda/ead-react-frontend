// api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:8081/invento-hub/";

export const getData = async (url) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw error;
  }
};

export const postData = async (url, requestBody) => {
  try {
    console.log(requestBody);
    const response = await axios.post(`${API_BASE_URL}${url}`, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw error;
  }
};

//string cutomerName = SELECT c.firstName FROM Customer c  WHERE c.id=9
