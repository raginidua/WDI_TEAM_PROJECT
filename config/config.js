//configuration constants to be used throughout express server
module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost/WDI_TEAM_PROJECT'
};
