import axios from "axios";

export default axios.create({
  baseURL: "http://firesms-messaging-platform.herokuapp.com",
});
