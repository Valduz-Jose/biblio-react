import axios from "axios";

// URL base de la API backend
const urlBase = "http://localhost:8080/api/libros";

// Cliente Axios configurado
const clienteAxios = axios.create({
  baseURL: urlBase,
});

// ===============================
// 📖 LISTAR LIBROS
// ===============================
export const listarLibros = async () => {
  try {
    const response = await clienteAxios.get("/");
    return response.data;
  } catch (error) {
    console.error("Error al listar libros:", error);
    throw error;
  }
};

// ===============================
// ➕ CREAR LIBRO
// ===============================
export const crearLibro = async (libro) => {
  try {
    const response = await clienteAxios.post("/", libro);
    return response.data;
  } catch (error) {
    console.error("Error al crear libro:", error);
    throw error;
  }
};

// ===============================
// 🔍 OBTENER LIBRO POR ID
// ===============================
export const obtenerLibroPorId = async (id) => {
  try {
    // [NUEVO]
    const response = await clienteAxios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener libro con id ${id}:`, error);
    throw error;
  }
};

// Exportaciones
export { clienteAxios, urlBase };