export const getRandomImage = () =>
  `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 25) + 1}`;

export default getRandomImage;
