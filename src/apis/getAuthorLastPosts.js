import clientApi from "../constants/axios-instance";

export const getAuthorLastPosts = async (id) => {
  try {
    return await clientApi.get(`/users/${id}/posts?limit=3`);
  } catch (error) {
    return error.message;
  }
};

export default getAuthorLastPosts;
