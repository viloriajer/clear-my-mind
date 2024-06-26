import express from "express";
import { query } from "./dbPool.js";
import dotenv from "dotenv";

const app = express();
app.use(express.static("public"));

dotenv.config();

app.get("/activity", async function (req, res) {
	const [result] = await query(
		`SELECT activity FROM activity
		ORDER BY RAND()
		LIMIT 1;`
	);
	res.send(result);
});

app.listen(process.env.SERVER_PORT, function () {
	console.log(
		`clear-my-mind app listening on port ${process.env.SERVER_PORT}!`
	);
});
