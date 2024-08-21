const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false); // Disable strict mode for queries
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('DB Connection Error:', error);
    }
}

module.exports = { db };
