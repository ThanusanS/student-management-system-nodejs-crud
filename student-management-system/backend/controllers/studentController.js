const db = require("../config/db");

// Get all students
exports.getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result);
  });
};

// Add student
exports.addStudent = (req, res) => {
  const { name, email, age } = req.body;
  db.query(
    "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
    [name, email, age],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Student added successfully!" });
    },
  );
};

// Update student
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  db.query(
    "UPDATE students SET name=?, email=?, age=? WHERE id=?",
    [name, email, age, id],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Student updated successfully!" });
    },
  );
};

// Delete student
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM students WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Student deleted successfully!" });
  });
};

// Get single student
exports.getStudentById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM students WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result[0]);
  });
};
