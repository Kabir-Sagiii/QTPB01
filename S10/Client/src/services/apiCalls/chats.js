import axios from "axios";

export const createChat = (data) => {
  return axios.post("http://localhost:7979/api/chats/create-chat", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
