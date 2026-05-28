# End-to-End Backend Workflow Testing

## Task 19 — Testing & Validation Internship Project

This project implements a complete end-to-end backend workflow testing suite for an AI Interview System. The system validates backend orchestration workflows including session management, interview execution, storage validation, recovery testing, and concurrent request handling.

---

# Project Objective

The objective of this project is to test and validate backend workflows using automated testing techniques to ensure reliability, consistency, and stability of backend operations.

---

# Features

* Session Creation Testing
* Interview Workflow Testing
* Storage Validation
* Recovery Workflow Testing
* Concurrent Request Testing
* Automated API Validation
* Backend Workflow Orchestration Testing

---

# Tech Stack

| Technology   | Purpose           |
| ------------ | ----------------- |
| Node.js      | Backend runtime   |
| Express.js   | API framework     |
| Jest         | Testing framework |
| Supertest    | API testing       |
| Git & GitHub | Version control   |

---

# Project Structure

```bash
backend-workflow-testing/
│
├── controllers/
├── reports/
├── routes/
├── tests/
│   ├── concurrent.test.js
│   ├── interview.test.js
│   ├── recovery.test.js
│   ├── session.test.js
│   └── storage.test.js
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# API Endpoints

## Session Creation

```http
POST /session/create
```

Creates a new interview session.

---

## Interview Start

```http
POST /interview/start
```

Starts interview workflow execution.

---

## Interview Save

```http
POST /interview/save
```

Stores interview responses and workflow data.

---

## Interview Recovery

```http
GET /interview/recover
```

Recovers interrupted interview sessions.

---

# Test Coverage

The project includes the following automated test suites:

| Test File          | Purpose                     |
| ------------------ | --------------------------- |
| session.test.js    | Session workflow testing    |
| interview.test.js  | Interview execution testing |
| storage.test.js    | Storage validation testing  |
| recovery.test.js   | Recovery workflow testing   |
| concurrent.test.js | Concurrent request handling |

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Darshan9953/backend-workflow-testing.git
```

---

## Navigate To Project

```bash
cd backend-workflow-testing
```

---

## Install Dependencies

```bash
npm install
```

---

# Running Tests

Run all automated test suites:

```bash
npm test
```

---

# Expected Output

```bash
PASS tests/session.test.js
PASS tests/interview.test.js
PASS tests/storage.test.js
PASS tests/recovery.test.js
PASS tests/concurrent.test.js
```

---

# Concurrent Workflow Testing

The project implements concurrent backend request testing using multiple simultaneous API calls to validate backend reliability under load conditions.

This ensures:

* Workflow consistency
* Stable API responses
* Proper backend orchestration
* Concurrent request handling

---

# Learning Outcomes

Through this project, the following concepts were learned and implemented:

* Backend API Testing
* Automated Testing Frameworks
* Concurrent Workflow Validation
* Recovery Workflow Testing
* API Response Validation
* Backend Orchestration
* Git & GitHub Workflow

---

# GitHub Repository

Repository Link:

https://github.com/Darshan9953/backend-workflow-testing

---

# Author

## Darshan Nikam

Backend Workflow Testing Intern
