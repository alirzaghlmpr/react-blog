import clientApi from "../constants/axios-instance";

export const getAuthorDetails = async (id = null) => {
  try {
    return await clientApi.get(`/users/${id}`);
  } catch (error) {
    return error.message;
  }
};

export default getAuthorDetails;
