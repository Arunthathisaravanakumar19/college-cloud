package com.collegecloud.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.collegecloud.backend.model.Student;
import com.collegecloud.backend.service.StudentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    // GET ALL
    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    // SAVE
    @PostMapping
    public Student save(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable String id,
                                 @RequestBody Student student) {
        student.setId(id);
        return service.saveStudent(student);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable String id) {
        service.deleteStudent(id);
    }
}