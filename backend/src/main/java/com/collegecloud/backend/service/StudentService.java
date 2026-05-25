package com.collegecloud.backend.service;

import com.collegecloud.backend.model.Student;
import com.collegecloud.backend.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public void deleteStudent(String id) {
        repository.deleteById(id);
    }
}