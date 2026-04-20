import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container">

        <Link className="navbar-brand text-warning" to="/">
          <i className="bi bi-book-half me-2"></i>
          Biblioteca
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Listado
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;