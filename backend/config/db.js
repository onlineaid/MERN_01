const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env'})

const connectDB = async() => {
    try {
        const conn = await mongoose.connect( process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = () => {
//     mongoose.connect(process.env.DB_LOCAL_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }).then( con => {
//         console.log(`MongoDB connected with Host : ${con.connection.host}`);
//     })
// };


// module.exports = connectDB;