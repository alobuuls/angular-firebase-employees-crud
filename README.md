# 🚀 Angular Firebase Employees CRUD

Aplicación desarrollada en **Angular 12** para la gestión de empleados, utilizando **Firebase Firestore** como base de datos en tiempo real. Permite realizar operaciones CRUD completas *(crear, leer, actualizar y eliminar empleados)* con formularios reactivos y arquitectura modular.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente `v24.13.0`)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`
- 🔥 **Proyecto configurado en Firebase Firestore**

---

## 🔍 Verificar versiones instaladas

Ejecuta los siguientes comandos en la terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-firebase-employees-crud
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 🔥 Configuración de Firebase

Antes de ejecutar el proyecto, configura Firebase:

1. Crear proyecto en Firebase Console
2. Activar Firestore Database
3. Configurar credenciales en:

```bash
src/environments/environment.ts
```

### Ejemplo de configuración

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "XXX",
    authDomain: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX"
  }
};
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre en tu navegador:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

### 👨‍💼 Employees Module

- `EmployeeComponent` → Formulario para crear y editar empleados
- `EmployeeListComponent` → Lista de empleados con acciones
- `EmployeesComponent` → Layout principal del módulo

### 🧠 Shared Layer

- `EmployeeService` → Comunicación con Firebase Firestore
- `EmployeeModel` → Estructura de datos del empleado

---

## ⚙️ Funcionalidades principales

- ➕ Crear empleados
- 📋 Listar empleados en tiempo real
- ✏️ Editar empleados
- ❌ Eliminar empleados
- 🔥 Integración con Firebase Firestore
- 🎯 Validación de formularios
- 💬 Notificaciones con Toastr

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 12
- 🔥 Firebase Firestore
- ⚡ TypeScript
- 🎨 Bootstrap
- 💬 ngx-toastr
- 🧾 Angular Forms

---

## 📁 Estructura del proyecto

```bash
src/
├── app/
│   ├── employees/
│   │   ├── employee/
│   │   ├── employee-list/
│   │   └── employees.component.ts
│   ├── shared/
│   │   ├── employee.model.ts
│   │   └── employee.service.ts
│   ├── app.module.ts
│   └── app.component.ts
├── environments/
```

---

## 🔥 Buenas prácticas implementadas

- Separación de responsabilidades *(components / services / models)*
- Uso de servicios inyectables
- CRUD en tiempo real con Firestore
- Arquitectura modular
- Formularios reactivos y template-driven
- Código reutilizable y escalable

---

## 📄 Licencia

Proyecto con fines educativos y de portafolio.
