import axios from "axios";

export default (token = false) => {
  return axios.create({
    baseURL: "http://192.168.0.143:8000/margaret/",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
