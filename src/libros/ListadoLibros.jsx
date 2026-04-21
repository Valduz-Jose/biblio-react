import { useEffect, useState } from "react";
import { listarLibros } from "../api/libros";
import { useNavigate } from "react-router-dom"; // [NUEVO]

function ListadoLibros() {

  const [libros, setLibros] = useState([]);
  const navigate = useNavigate(); // [NUEVO]

  useEffect(() => {
    cargarLibros();
  }, []);

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
              <th>Acciones</th> {/* [NUEVO] */}
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

                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/editar/${libro.id}`)} // [NUEVO]
                    >
                      <i className="bi bi-pencil-square me-1"></i>
                      Editar
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