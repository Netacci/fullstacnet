const favoriteBlog = require('../utils/list_helper').favoriteBlog;

describe('favorite blog', () => {
  const listBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234567f8',
      title: 'Statement Considered Harmful',
      author: 'Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 15,
      __v: 0,
    },
  ];
  test('check for favorite blog', () => {
    const result = favoriteBlog(listBlogs.map((blog) => blog.likes));
    expect(result).toEqual(15);
  });
});
