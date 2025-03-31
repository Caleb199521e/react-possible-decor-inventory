const express = require('express');
const cors = require('cors');
const connectDB = require('./connect.cjs');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes'); // ✅ Add this line
const categoryRoutes = require('./routes/categoryRoutes'); 
require('dotenv').config();

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Server!");
});

const PORT = process.env.PORT || 5000;

app.use(cors());
// Increase request size limit
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Request body:', req.body);
  next();
});

let mongoClient;

// Async function to start the server
async function startServer() {
  try {
     await connectDB();
    
    app.use('/api/users', userRoutes);
    app.use('/api/products', productRoutes); // ✅ Add this line
    app.use('/api/categories', categoryRoutes); // ✅ Add this line

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Handle cleanup on server shutdown
process.on('SIGINT', async () => {
  if (mongoClient) {
    await mongoClient.close();
    console.log('MongoDB connection closed.');
  }
  process.exit(0);
});
