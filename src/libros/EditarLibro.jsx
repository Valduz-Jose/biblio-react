import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerLibroPorId } from "../api/libros";

function EditarLibro() {

  const navigate = useNavigate();
  const { id } = useParams(); // [NUEVO]

  // =========================
  // 🧠 ESTADO DEL FORMULARIO
  // =========================
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    rating: ""
  });

  // =========================
  // 🔄 CARGAR LIBRO
  // =========================
  useEffect(() => {
    cargarLibro();
  }, []);

  const cargarLibro = async () => {
    try {
      // [NUEVO]
      const data = await obtenerLibroPorId(id);
      setLibro(data);
    } catch (error) {
      console.error("Error al cargar libro:", error);
    }
  };

  // =========================
  // 📌 MANEJAR INPUTS
  // =========================
  const handleChange = (e) => {
    setLibro({
      ...libro,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center text-warning">
        <i className="bi bi-pencil-square me-2"></i>
        Editar Libro
      </h2>

      <form className="card mt-4 p-4">

        {/* TÍTULO */}
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={libro.titulo}
            onChange={handleChange}
            required
          />
        </div>

        {/* AUTOR */}
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            name="autor"
            value={libro.autor}
            onChange={handleChange}
            required
          />
        </div>

        {/* RATING */}
        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input
            type="number"
            className="form-control"
            name="rating"
            min="1"
            max="5"
            value={libro.rating}
            onChange={handleChange}
            required
          />
        </div>

        {/* BOTONES */}
        <div className="d-flex justify-content-between">

          <button type="button" className="btn btn-success">
            Guardar Cambios
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>

        </div>

      </form>

    </div>
  );
}

export default EditarLibro;