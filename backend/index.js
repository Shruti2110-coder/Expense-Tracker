 require('dotenv').config();
 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const transactionRoutes = require('./Routes/transaction');





const app = express();

// ⚡ CORS middleware must be here, BEFORE routes
app.use(cors());

app.use(bodyParser.json());

// Routes
app.use('/api/transactions', transactionRoutes);

// MongoDB connection
mongoose.connect(`${process.env.MONGO_URL}`)
  .then(()=>console.log('MongoDB connected'))
  .catch(err=>console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>console.log(`Server running on ${PORT}`));
