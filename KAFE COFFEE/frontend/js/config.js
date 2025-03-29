const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const apiConfig = {
    apiUrl: 'https://api.example.com',
    apiKey: 'your-api-key'
};

module.exports = { connectDB, apiConfig };