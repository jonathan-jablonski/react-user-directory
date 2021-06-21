import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=65";

// eslint-disable-next-line
export default {
  fetchEmployees: function () {
    return axios.get(BASEURL);
  },
};
