# ⚛️ Biblioteca Personal Frontend (React + Vite)

## 🚀 Descripción

Aplicación web desarrollada con **React + Vite** para gestionar una biblioteca personal.

Consume una API REST desarrollada en FastAPI y permite realizar un CRUD completo de libros.

🔗 **Demo en producción:**
https://biblio-react-seven.vercel.app/

🔗 **Backend API:**
https://biblioteca-fastapi-uz50.onrender.com

---

## ⚙️ Tecnologías

- ⚛️ React
- ⚡ Vite
- 🔗 Axios
- 🎨 Bootstrap 5 (Dark Mode)
- 🌐 React Router DOM

---

## 📦 Instalación

### 1️⃣ Clonar repositorio
```bash
git clone https://github.com/Valduz-Jose/biblio-react.git
cd biblio-react
```
### 2️⃣ Instalar dependencias
```
npm install
```
## ⚙️ Variables de entorno

Crear archivo .env
```
VITE_API_URL=https://biblioteca-fastapi-uz50.onrender.com/api/libros
```
## 🚀 Ejecutar proyecto
```
npm run dev
```
Ir a:
```
http://localhost:5173/
```
## 🧱 Funcionalidades
- 📚 Listar libros
- ➕ Agregar libro
- ✏️ Editar libro
- ❌ Eliminar libro
- 🌙 Interfaz en modo oscuro
- 🔄 Consumo de API en tiempo real

## 📂 Estructura del proyecto
```
src/
│
├── api/
│   └── libros.js        # Axios + endpoints
│
├── libros/
│   ├── ListadoLibros.jsx
│   ├── AgregarLibro.jsx
│   └── EditarLibro.jsx
│
├── componentes/
│   └── Navegacion.jsx
│
├── App.jsx
└── main.jsx
```
## 🔗 Conexión con API

Ejemplo en libros.js:
```
const urlBase = import.meta.env.VITE_API_URL;
```
## 📸 Capturas

# Pantalla Principal
<img width="1832" height="779" alt="Captura de pantalla 2026-04-21 112934" src="https://github.com/user-attachments/assets/cd6210f1-3632-4277-8507-6afbbcaee417" />

# Crear Libro
<img width="1833" height="814" alt="Captura de pantalla 2026-04-21 112946" src="https://github.com/user-attachments/assets/5b972656-0cdd-4ad0-ab5c-17a9816bdd40" />
<img width="1828" height="792" alt="Captura de pantalla 2026-04-21 113026" src="https://github.com/user-attachments/assets/49d2dcee-44c0-423a-b6ae-267d053b356f" />


# Editar
<img width="1832" height="754" alt="Captura de pantalla 2026-04-21 113057" src="https://github.com/user-attachments/assets/fdcd54f7-658e-493f-912d-553e5b53eadb" />
<img width="1834" height="793" alt="Captura de pantalla 2026-04-21 113147" src="https://github.com/user-attachments/assets/3d544b74-75b5-4e7c-a0a2-777e53a192b1" />

# Eliminar
<img width="1828" height="821" alt="Captura de pantalla 2026-04-21 113037" src="https://github.com/user-attachments/assets/2fe8a57f-aad1-4b95-aa1d-041d30cda45a" />
<img width="1832" height="819" alt="Captura de pantalla 2026-04-21 113202" src="https://github.com/user-attachments/assets/18cf142a-8b7d-4798-86f8-012d788a771c" />
<img width="1832" height="783" alt="Captura de pantalla 2026-04-21 113210" src="https://github.com/user-attachments/assets/9dddecd0-4fc1-4067-a530-d25b7114899f" />

## 🌐 Deploy
- Frontend: Vercel
- Backend: Render
- Base de datos: PostgreSQL (Render)

## 📈 Estado del proyecto
- ✅ CRUD completo
- ✅ Integración con API
- ✅ Deploy en Vercel
- ✅ UI con Bootstrap

## 🚀 Próximas mejoras
- 🔐 Autenticación de usuarios
- ⭐ Sistema de favoritos
- 📱 Responsive mejorado
- 📊 Dashboard

## 👨‍💻 Autor

José Alejandro Valduz Contreras

GitHub: https://github.com/Valduz-Jose

⭐ Support

Si este proyecto te ayuda, ¡dale una estrella!
