import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file
const apiKey = process.env.RESAS_API_KEY;  // Retrieve the environment variable
console.log('API Key:', apiKey);
