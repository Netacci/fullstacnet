const dummy = (blogs) => {
  return 1;
};
const tottalLikes = (blogs) => {
  const reducer = (sum, item) => sum + item;

  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  return Math.max(...blogs);
};

module.exports = { dummy, tottalLikes, favoriteBlog };
