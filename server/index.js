import express from "express";
import { query } from "./dbPool.js";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

dotenv.config();

app.get("/activity", async function (req, res) {
	const [result] = await query(
		`SELECT activity FROM activity
		ORDER BY RAND()
		LIMIT 1;`
	);
	res.send(result);
});

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../index.html"));
});
app.listen(process.env.PORT, function () {
	console.log(`clear-my-mind app listening on port ${process.env.PORT}!`);
});
