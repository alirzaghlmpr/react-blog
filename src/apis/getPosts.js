import clientApi from "../constants/axios-instance";

export const getPosts = async (
  id = null,
  limit = null,
  skip = null,
  tag = null
) => {
  try {
    const base = tag
      ? `/posts/tag/${tag}?limit=${limit ?? 10}&skip=${skip ?? 0}`
      : `/posts${id == null ? "" : `/${id}`}${
          limit == null && skip == null ? "" : `?limit=${limit}&skip=${skip}`
        }`;

    return await clientApi.get(base);
  } catch (error) {
    return error.message;
  }
};
export default getPosts;
