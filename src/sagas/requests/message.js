import axios from "axios";

export const getMessageRequest = () => {
  return axios.request({
    method: "GET",
    url: "http://localhost:3001/posts",
  });
};
