import axios from "axios";
import { getAPIRoute } from "../api/api";
import { v4 as uuid } from "uuid";

//Function that is going to return data based on response
export const sendRequest = async (param) => {
  try {
    // De-structured response
    const { data } = await axios.get(getAPIRoute(param));
    return { ...data, id: uuid() };
  } catch (err) {
    //If we have an error, return error object
    return { error: true, message: err.message, hostname: param, id: uuid() };
  }
};
