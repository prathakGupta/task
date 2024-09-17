const axios = require('axios');

const githubApiUrl = 'https://api.github.com';

const getFollowStatus = (username) => {
  const url = `${githubApiUrl}/${username}/following/bytemait`;
  return axios.get(url);
};

module.exports = { getFollowStatus };