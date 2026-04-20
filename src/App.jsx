import { Routes, Route } from "react-router-dom";
import ListadoLibros from "./libros/ListadoLibros";
import Navegacion from "./componentes/Navegacion";

function App() {
  return (
    <div>
      <Navegacion /> {/* [NUEVO] */}

      <Routes>
        <Route path="/" element={<ListadoLibros />} />
      </Routes>
    </div>
  );
}

export default App;