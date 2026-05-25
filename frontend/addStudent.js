console.log("addStudent.js loaded");

const API = "http://localhost:8090/api/students";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("addStudentForm");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const student = {
            name: document.getElementById("name").value.trim(),
            department: document.getElementById("department").value.trim(),
            email: document.getElementById("email").value.trim()
        };

        // Validation
        if (
            student.name === "" ||
            student.department === "" ||
            student.email === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        try {

            const response = await fetch(API, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)

            });

            if (!response.ok) {
                throw new Error("Failed to add student");
            }

            alert("Student added successfully");

            form.reset();

        } catch (error) {

            console.error(error);

            alert("Backend connection failed.\nMake sure Spring Boot and MongoDB are running.");

        }

    });

});