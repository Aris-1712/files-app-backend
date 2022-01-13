const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler=require('./utils/errorHandler')

const fileRoutes = require('./routes/fileRoutes');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());


// Body parser, reading data from body into req.body
app.use(express.json());

// Routes
app.use('/api/files/', fileRoutes);

//  undefined Routes
app.use('*', (req, res, next) => {
    const err = new Error('undefined route');
    next(err, req, res, next);
});

app.use(errorHandler);

module.exports = app;