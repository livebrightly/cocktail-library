const mongoose = require('mongoose');

// TODO modify server connections



// mongoose.connect(process.env.DATABASE_URL, {
mongoose.connect('mongodb://localhost/libraryBar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// connection object
const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});