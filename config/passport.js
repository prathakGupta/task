const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const YouTubeStrategy = require('passport-youtube').Strategy;

// GitHub strategy
passport.use(new GitHubStrategy({
  clientID: 'Ov23liPBbPk0T8vnvJXw',
  clientSecret: 'b96062b4bf86d2b84455e47fb005a12555968a63',
  callbackURL: 'http://localhost:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, cb) => {
  // Verify user's follow status on GitHub
  const githubUsername = profile.username;
  const githubApiUrl = `https://api.github.com/${githubUsername}/following/bytemait`;
  axios.get(githubApiUrl)
    .then(response => {
      if (response.data) {
        return cb(null, profile);
      } else {
        return cb(null, false, { message: 'You are not following B.Y.T.E. on GitHub.' });
      }
    })
    .catch(error => {
      return cb(error);
    });
}));

// YouTube strategy
passport.use(new YouTubeStrategy({
  clientID: '197921399736-d1od5lve4jui584vekfrck1e3sa3i6k2.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/youtube/callback'
}, (accessToken, refreshToken, profile, cb) => {
  // Verify user's subscription status on YouTube
  const youtubeChannelId = 'UCgIzTPYitha6idOdrr7M8sQ';
  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/subscriptions?part=id,snippet&mine=true&channelId=${youtubeChannelId}`;
  axios.get(youtubeApiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(response => {
      if (response.data.items.length > 0) {
        return cb(null, profile);
      } else {
        return cb(null, false, { message: 'You are not subscribed to B.Y.T.E. on YouTube.' });
      }
    })
    .catch(error => {
      return cb(error);
    });
}));