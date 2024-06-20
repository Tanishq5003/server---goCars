const express = require ("express");
const {connectToMongoDb} = require("./connect");
const app = express();
const port = 3000;

// Connection to MongoDB
connectToMongoDb("mongodb://localhost:27017/goCars").
then(() => console.log("connected to MongoDb"));

// Middlewares
app.use(express.json());

// Routes
const UserRoutes = require("./routes/user");

// Register Routes
app.use("/users", UserRoutes);

app.listen(port, () => console.log(`Server Started at port : ${port}`));