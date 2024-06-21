import express from "express";
import { query } from "./dbPool.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.get("/activity", async function (req, res) {
	const result = await query("select * from activity;");
	res.send(result);
});
app.listen(process.env.PORT, function () {
	console.log(`clear-my-mind app listening on port ${process.env.PORT}!`);
});
