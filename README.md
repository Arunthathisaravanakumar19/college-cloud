College Cloud Management System

A full-stack cloud-based student management system developed using Spring Boot, MongoDB Atlas, AWS S3, and Render.
This project demonstrates how modern cloud services can be integrated to build and deploy a scalable web application.

The system allows administrators to:

Add student records
View student details
Manage student information
Store and retrieve data from a cloud database
Access the application online through cloud hosting
Project Architecture
User → AWS S3 Frontend → Render Backend → MongoDB Atlas Database
Technologies Used
Frontend
HTML5
CSS3
JavaScript
Backend
Java
Spring Boot
REST API
Database
MongoDB Atlas (Cloud NoSQL Database)
Cloud & Deployment Services
AWS S3 (Frontend Hosting)
Render (Backend Hosting)
GitHub (Version Control & Deployment)
MongoDB Atlas (Cloud Database)
Cloud Services Used
AWS S3

Used for hosting the frontend static website files.

Features Used:

S3 Bucket
Static Website Hosting
Public Access Configuration
Bucket Policy

Benefits:

Low-cost hosting
High availability
Fast content delivery
MongoDB Atlas

Used as the cloud database service for storing student data.

Features Used:

MongoDB Cluster
Database Authentication
Cloud Database Connectivity
IP Access Configuration

Benefits:

Fully managed database
Scalable and secure
Easy Spring Boot integration
Render

Used to deploy and host the Spring Boot backend application.

Features Used:

Web Service Deployment
Docker-Based Deployment
Environment Variables
Auto Deployment from GitHub

Benefits:

Easy cloud deployment
Automatic redeployment
Free hosting support
GitHub

Used for source code management and deployment integration.

Features Used:

Git Version Control
Repository Management
Continuous Deployment Integration

Benefits:

Code backup and collaboration
Deployment automation
Version tracking
Features
Cloud-based deployment
Student management system
REST API integration
Responsive frontend interface
Secure database connectivity
Full-stack architecture
Real-time data storage using MongoDB Atlas
Deployment Workflow
1. Frontend files uploaded to AWS S3
2. Backend code pushed to GitHub
3. Render automatically deploys backend from GitHub
4. Spring Boot backend connects to MongoDB Atlas
5. Frontend communicates with backend APIs
Project Purpose

This project was developed to understand:

Cloud computing services
Full-stack web development
REST API integration
Cloud deployment architecture
Database connectivity using MongoDB Atlas
Real-world hosting using AWS services
Future Enhancements
User authentication system
Admin dashboard analytics
Attendance tracking with geolocation
File upload support
Role-based access control
AWS EC2 deployment
CI/CD pipeline integration
