<h1 align="center">🔥 Angular Firebase Employees CRUD</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black" alt="Firebase Firestore" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-firebase-employees-crud" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-firebase-employees-crud/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-firebase-employees-crud?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-firebase-employees-crud/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-firebase-employees-crud" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🔥 Angular Firebase Employees CRUD](#-angular-firebase-employees-crud)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🔥 Firebase Configuration](#-firebase-configuration)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-firebase-employees-crud/

---

## 📖 Description

> [!NOTE]
> An Angular application that implements a complete employee management system using Firebase Firestore as a real-time database.

The project demonstrates full CRUD operations, reactive forms, real-time data synchronization, service-based architecture, and scalable Angular development practices through a modern employee management dashboard.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v12.14.x – v14.x` *(recommended: v14.21.3 LTS)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`
- 🔥 **Firebase Project** with Firestore enabled

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-firebase-employees-crud.git

cd angular-firebase-employees-crud
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🔥 Firebase Configuration

Before running the application, create a Firebase project and enable Firestore Database.

Configure your credentials inside:

```ts
src/environments/environment.ts
```

Example:

```ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "XXXXXXXX",
    appId: "XXXXXXXX"
  }
};
```

---

## 🧠 Project Architecture

The application follows a modular architecture based on components, services, and models.

### 📦 EmployeesComponent

Responsible for:

* Employee module layout
* Component orchestration
* CRUD workflow coordination

### 📦 EmployeeComponent

Responsible for:

* Employee creation
* Employee editing
* Form validation
* Form state management

### 📦 EmployeeListComponent

Responsible for:

* Employee listing
* Record selection
* Delete actions
* Real-time updates

### 📦 EmployeeService

Responsible for:

* Firestore communication
* CRUD operations
* Data synchronization
* Business logic abstraction

### 📦 Employee Model

Responsible for:

* Employee entity structure
* Type safety
* Data consistency

---

## ✨ Features

* ➕ Create employees
* 📋 Read employee records
* ✏️ Update employee information
* ❌ Delete employees
* 🔥 Real-time Firestore synchronization
* 🧾 Angular Forms integration
* 🎯 Form validation
* 💬 Toastr notifications
* ⚡ Reactive UI updates
* 🧩 Service-based architecture
* 🚀 Scalable project structure

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 12 | Front-End Framework |
| Firebase Firestore | Real-Time Database |
| TypeScript | Application Logic |
| Angular Forms | Form Management |
| Bootstrap | UI Styling |
| ngx-toastr | Notifications |
| HTML5 | Structure |
| CSS3 | Styling |

---

## 📁 Project Structure

```text
angular-firebase-employees-crud/

├── src/
│   ├── app/
│   │   ├── employees/
│   │   │   ├── employee/
│   │   │   ├── employee-list/
│   │   │   └── employees.component.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── employee.model.ts
│   │   │   └── employee.service.ts
│   │   │
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   └── main.ts
│
├── package.json
├── angular.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Strong typing with TypeScript
* Service-based architecture
* Separation of concerns
* Dependency injection
* Firebase abstraction layer
* Component reusability
* Form validation patterns
* Real-time data synchronization
* Scalable project organization
* Maintainable code structure

---

## 🎯 Project Goal

Practice and strengthen Angular and Firebase concepts through the implementation of a real-world CRUD application:

* Firebase Firestore Integration
* CRUD Operations
* Angular Forms
* Service Architecture
* TypeScript Modeling
* Real-Time Data Handling
* Dependency Injection
* Scalable Front-End Development

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
