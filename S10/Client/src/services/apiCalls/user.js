import axios from "axios";

export const getLoggedUser = async () => {
  try {
    const data = await axios.get(
      "http://localhost:7979/api/users/getLoggedUser",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (error) {}
};
