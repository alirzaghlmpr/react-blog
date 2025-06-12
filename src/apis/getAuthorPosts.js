import clientApi from "../constants/axios-instance";

export const getAuthorPosts = async (id) => {
  try {
    return await clientApi.get(`/users/${id}/posts`);
  } catch (error) {
    return error.message;
  }
};

export default getAuthorPosts;
