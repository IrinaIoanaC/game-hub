import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b791e511ee3c4b7da078d4a63161c684",
  },
});
