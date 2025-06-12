import clientApi from "../constants/axios-instance";

export const getPostsComments = async (id = null) => {
  try {
    return await clientApi.get(`/comments/post/${id}`);
  } catch (error) {
    return error.message;
  }
};

export default getPostsComments;
