const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    API_PUBLIC_KEY: process.env.API_PUBLIC_KEY,
    API_PRIVATE_KEY: process.env.API_PRIVATE_KEY,
  
}