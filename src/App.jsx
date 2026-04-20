import { Routes, Route } from "react-router-dom";
import ListadoLibros from "./libros/ListadoLibros";
import Navegacion from "./componentes/Navegacion";
import AgregarLibro from "./libros/AgregarLibro"; // [NUEVO]

function App() {
  return (
    <div>
      <Navegacion />

      <Routes>
        <Route path="/" element={<ListadoLibros />} />
        <Route path="/agregar" element={<AgregarLibro />} /> {/* [NUEVO] */}
      </Routes>
    </div>
  );
}

export default App;