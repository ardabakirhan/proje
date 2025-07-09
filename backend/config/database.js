const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Ensure dotenv loads environment variables
console.log('Database.js: Environment variables yükleniyor...');
const envPath = path.join(__dirname, '../.env');
console.log('Database.js: .env dosyası yolu:', envPath);
dotenv.config({ path: envPath });
console.log('Database.js: Environment variables yüklendi.');
console.log('Database.js: MONGODB_URI:', process.env.MONGODB_URI ? 'tanımlanmış' : 'tanımlı değil');

// Export function directly 
function connectDB() {
  try {
    console.log('Database.js: MongoDB bağlantısı deneniyor...');
    // MongoDB Atlas bağlantı ayarları
    const mongoOptions = {
      // Free tier için optimize edilmiş ayarlar
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };
    
    // Local MongoDB URI for development
    const MONGODB_URI = 'mongodb://localhost:27017/iletisimgroup';
    
    console.log('Database.js: MongoDB URI:', MONGODB_URI);
    
    // Connect synchronously for simplicity
    mongoose.connect(MONGODB_URI, mongoOptions)
      .then(conn => {
        console.log(`Database.js: MongoDB Atlas baglandi: ${conn.connection.host}`);
        console.log(`Database.js: Veritabani: ${conn.connection.name}`);
        return conn;
      })
      .catch(error => {
        console.error('Database.js: MongoDB baglanti hatasi:', error.message);
        process.exit(1);
      });
    
    return true;
  } catch (error) {
    console.error('Database.js: MongoDB baglanti hatasi:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
