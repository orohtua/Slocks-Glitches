// Configuration file for the Anti-Racist RBA system

module.exports = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/slocks-glitches'
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
  },
  api: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api',
    version: 'v1'
  }
};
