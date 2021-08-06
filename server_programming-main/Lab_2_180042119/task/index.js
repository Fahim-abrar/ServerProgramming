const connectDB = require("./model/db");
require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;

// Connect Database
connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
