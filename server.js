
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const Connectdb=require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());

//connect to db 
Connectdb();

// Routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    