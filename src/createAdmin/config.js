const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.REACT_APP_API_KEY;

module.exports = API_KEY;