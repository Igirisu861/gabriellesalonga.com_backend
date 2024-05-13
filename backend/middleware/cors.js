const cors = require('cors');

const corsOptions = {
    origin: "http://127.0.0.1:5500",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

module.exports = cors(corsOptions);