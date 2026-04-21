import { useNavigate } from "react-router-dom";

function EditarLibro() {

  const navigate = useNavigate();

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
            placeholder="Ingrese el título"
          />
        </div>

        {/* AUTOR */}
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el autor"
          />
        </div>

        {/* RATING */}
        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input
            type="number"
            className="form-control"
            min="1"
            max="5"
            placeholder="Ingrese el rating"
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