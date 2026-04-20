function AgregarLibro() {
  return (
    <div className="container mt-4">

      <h2 className="text-center text-warning">
        <i className="bi bi-book-half me-2"></i>
        Agregar Libro
      </h2>

      <div className="card mt-4 p-4">

        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" placeholder="Ingrese título" />
        </div>

        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input type="text" className="form-control" placeholder="Ingrese autor" />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input type="number" className="form-control" min="1" max="5" />
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-success">
            Guardar
          </button>

          <button className="btn btn-secondary">
            Cancelar
          </button>
        </div>

      </div>
    </div>
  );
}

export default AgregarLibro;