const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors');
const app = express();


dotenv.config({ path: "./config.env" });
require("./db/conn");

// Middleware
app.use(express.json());
app.use(cors());

// Routes from products.js file
app.use(require("./routes/products"));

const PORT = process.env.PORT;


// Routes
// app.get('/', (req, res) => {
//   res.send('MERN Crud App ');
// });

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
