import { useEffect, useState } from "react";
import { listarLibros, eliminarLibro } from "../api/libros";
import { useNavigate } from "react-router-dom";

function ListadoLibros() {

  const [libros, setLibros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarLibros();
  }, []);

  // =========================
  // 📖 CARGAR LIBROS
  // =========================
  const cargarLibros = async () => {
    try {
      const data = await listarLibros();
      setLibros(data);
    } catch (error) {
      console.error("Error al cargar libros:", error);
    }
  };

  // =========================
  // 🗑️ ELIMINAR LIBRO
  // =========================
  const handleEliminar = async (id) => {

    // [NUEVO]
    const confirmacion = confirm("¿Seguro que deseas eliminar este libro?");

    if (!confirmacion) return;

    try {
      await eliminarLibro(id);

      alert("Libro eliminado correctamente 🗑️");

      // Refrescar listado
      cargarLibros();

    } catch (error) {
      alert("Error al eliminar libro ❌");
      console.error(error);
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
              <th>Acciones</th>
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

                  <td className="d-flex gap-2">

                    {/* EDITAR */}
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/editar/${libro.id}`)}
                    >
                      <i className="bi bi-pencil-square me-1"></i>
                      Editar
                    </button>

                    {/* ELIMINAR */}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleEliminar(libro.id)} // [NUEVO]
                    >
                      <i className="bi bi-trash me-1"></i>
                      Eliminar
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
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