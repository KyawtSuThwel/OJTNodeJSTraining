import dotenv from "dotenv";
import express from "express";
import connection from "./db.js";
import passwordReset from "./routes/passwordReset.js";
import users from"./routes/users.js";

const app = express();
dotenv.config();

connection();

app.use(express.json());
app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));