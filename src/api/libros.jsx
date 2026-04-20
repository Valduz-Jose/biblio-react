import axios from "axios";

// URL base de la API backend
const urlBase = "http://localhost:8080/api/libros";

// Creamos una instancia de axios para reutilizar configuración
const clienteAxios = axios.create({
  baseURL: urlBase,
});

// [NUEVO]
// Función para obtener la lista de libros desde la API
export const listarLibros = async () => {
  try {
    // Realiza una petición GET a la API
    const response = await clienteAxios.get("/");
    
    // Retorna los datos obtenidos
    return response.data;
  } catch (error) {
    console.error("Error al listar libros:", error);
    throw error;
  }
};

// Exportamos también si se necesita en otros lugares
export { clienteAxios, urlBase };