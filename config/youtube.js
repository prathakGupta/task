const axios = require('axios');

const youtubeApiUrl = 'https://youtube.googleapis.com/youtube/v3';

const getSubscriptionStatus = (channelId, accessToken) => {
  const url = `${youtubeApiUrl}/subscriptions?part=id,snippet&mine=true&channelId=${channelId}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};

module.exports = { getSubscriptionStatus };