const tableBody = document.querySelector("#studentsTable tbody");

async function loadStudents() {
  const res = await fetch("http://localhost:5000/api/students");
  const students = await res.json();
  tableBody.innerHTML = students
    .map(
      (s) => `
    <tr>
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>${s.age}</td>
      <td>
        <button class="edit-btn" onclick="editStudent(${s.id})">Edit</button>
        <button class="delete-btn" onclick="deleteStudent(${s.id})">Delete</button>
      </td>
    </tr>
  `,
    )
    .join("");
}

async function deleteStudent(id) {
  await fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" });
  loadStudents();
}

function editStudent(id) {
  window.location.href = `editStudent.html?id=${id}`;
}

loadStudents();



