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
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const data = await axios.get(
      "http://localhost:7979/api/users/getAllUsers",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
