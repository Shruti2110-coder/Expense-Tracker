const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');


// get all transaction 
router.get("/", async(req, res)=>{
      try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// post new transaction

// post new transaction
router.post('/', async (req, res) => {
  const { desc, amount, type } = req.body;

  // check if all fields are provided
  if (!desc || !amount || !type) {
    return res.status(400).json({ msg: "Please provide all the fields" });
  }

  try {
    // create new transaction
    const transaction = new Transaction({ desc, amount, type });
    await transaction.save();

    // send response
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
