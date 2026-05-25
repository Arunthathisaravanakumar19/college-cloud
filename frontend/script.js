const API = "http://localhost:8090/api/students";

// ================= LOAD STUDENTS =================

async function loadStudents() {

    const tableBody = document.getElementById("studentsTableBody");

    if (!tableBody) return;

    try {

        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const students = await response.json();

        tableBody.innerHTML = "";

        // Empty state
        if (students.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align:center;">
                        No students found
                    </td>
                </tr>
            `;

            return;
        }

        // Display students
        students.forEach((student, index) => {

            const row = `
                <tr class="student-row" style="--i:${index}">
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.department}</td>
                </tr>
            `;

            tableBody.innerHTML += row;
        });

    } catch (error) {

        console.error("Error loading students:", error);

        alert("Backend not reachable.\nCheck Spring Boot and MongoDB.");

    }

}

document.addEventListener("DOMContentLoaded", loadStudents);