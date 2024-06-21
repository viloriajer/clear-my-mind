import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
	host: "localhost",
	user: process.env.MYSQL_USER,
	database: "clearmind",
	password: process.env.MYSQL_PASS,
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10,
	idleTimeout: 60000,
	queueLimit: 0,
	enableKeepAlive: true,
	keepAliveInitialDelay: 0,
});

export const query = async (queryString) => {
	const connection = await pool.getConnection();

	const [result] = await connection.query(queryString);

	pool.releaseConnection(connection);
	connection.release();

	return result;
};
