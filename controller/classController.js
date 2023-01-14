import { db } from "../db.js";

export const getClasses = (req, res) => {
  const query = "SELECT * from class";
  db.query(query, (data, err) => {
    if (err) res.json(err);
    else res.json(data);
  });
};

export const createClasses = (req, res) => {
  const q = `INSERT INTO class(class_name,students) VALUE(?)`;

  const value = [req.body.class_name, req.body.students];

  db.query(q, [value], (err, data) => {
    if (err) return res.json(err);
    else res.json(data);
  });
};

export const upDateClass = (req, res) => {
  const class_id = req.params.id;
  const q = `UPDATE class set class_name=?,student=? WHERE class_id = ?`;
  const value = [req.body.class_name, req.body.students];
  db.query(q, [...value, class_id], (err, data) => {
    if (err) res.json(err);
    else res.json(data);
  });
};

// const deleteClass = (req,res)=>{
//     const class_id = req.body.class_id;
//     const q =
// }
