const express = require("express");
const config =require('./config.js');
const Database = require('./database.js');
// call the database obj
const database = new Database(config);
const router = express.Router();
router.use(express.json());
router.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
})

router.post('/addUser', async (req, res) => {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      // Create a user obj to store the data
      const user = req.body;
      console.log(`USERS: ${JSON.stringify(user)}`);
      const rowsAffected = await database.create(user);
      res.status(201).json({ rowsAffected });
    } catch (err) {
      res.status(500).json({ error: err?.message });
    }
  });


module.exports = router;
