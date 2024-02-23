import { toast } from "react-toastify";
import { mapColumnsList } from "../utils/mapColumnsList";
import { axiosApi } from "./axiosApi";

export const getColumnsList = async () => {
  try {
    const response = await axiosApi.get("/columns");
    const data = response.data;
    const mappedList = mapColumnsList(data);
    return mappedList;
  } catch (error) {
    toast.error("Error fetching Columns Data, Please try Again!");
  }
};
