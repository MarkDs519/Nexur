
const express = require("express");
// Import App routes
const router = require('./testConnection.js')
const port = 1433//process.env.PORT || 3001;

const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json());
// Connect App routes
app.use('/addUser', router);
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

