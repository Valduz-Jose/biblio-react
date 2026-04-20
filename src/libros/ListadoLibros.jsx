import { useEffect, useState } from "react";
import { listarLibros } from "../api/libros";

function ListadoLibros() {
  const [libros, setLibros] = useState([]);

  // [NUEVO]
  // Cargar libros al iniciar el componente
  useEffect(() => {
    cargarLibros();
  }, []);

  // [NUEVO]
  const cargarLibros = async () => {
    try {
      const data = await listarLibros();
      setLibros(data);
    } catch (error) {
      console.error("Error al cargar libros:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-warning">
        <i className="bi bi-book-half me-2"></i>
        Listado de Libros
      </h2>

      <div className="mt-4">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {libros.length > 0 ? (
              libros.map((libro) => (
                <tr key={libro.id}>
                  <td>{libro.id}</td>
                  <td>{libro.titulo}</td>
                  <td>{libro.autor}</td>
                  <td>{libro.rating}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay libros disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListadoLibros;
