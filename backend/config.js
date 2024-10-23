import dotenv from 'dotenv';
import path from 'path';

// Determine the path for the environment file
const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: envPath });

const config = {
  development: {
    MONGO_URI: process.env.MONGO_DB_URI,
    JWT_SECRET: process.env.JWT_SECRET || 'dev_jwt_secret',
    REACT_APP_URL: process.env.REACT_APP_URL || 'http://localhost:5173',
    REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  production: {
    MONGO_URI: process.env.MONGO_DB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    REACT_APP_URL: process.env.REACT_APP_URL,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'production'
  }
};

// Export the configuration based on the current environment
const currentEnv = process.env.NODE_ENV || 'development';

export default config[currentEnv];
