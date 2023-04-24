const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();

dotenv.config();
app.use(express.json());
app.use("*", cors());

app.get("/", (req, res) => {
	res.send("API is Running");
});

app.use("/user", proxy("http://localhost:5002"));
app.use("/items", proxy("http://localhost:5003"));
app.use("/cart-items", proxy("http://localhost:5004"));
app.use("/pay", proxy("http://localhost:5005"));
app.use("/rate", proxy("http://localhost:5006"));
app.use("/orders", proxy("http://localhost:5008"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
