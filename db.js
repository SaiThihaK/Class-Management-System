import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sai2002dec24",
  database: "classsy_system",
});
