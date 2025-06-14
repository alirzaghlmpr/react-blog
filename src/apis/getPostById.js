import clientApi from "../constants/axios-instance";

export const getPostById = async (id = null) => {
  try {
    return await clientApi.get(`/posts/${id}`);
  } catch (error) {
    return error.message;
  }
};
export default getPostById;
