import clientApi from "../constants/axios-instance";

export const getTags = async () => {
  try {
    return await clientApi.get("/posts/tags");
  } catch (error) {
    return error.message;
  }
};
export default getTags;
