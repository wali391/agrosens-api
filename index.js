const express = require("express");
const router = require("./router");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();



mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
    console.log("server connected");
});
