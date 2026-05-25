package com.collegecloud.backend.repository;

import com.collegecloud.backend.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
}
