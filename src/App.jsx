import { Routes, Route } from "react-router-dom";
import ListadoLibros from "./libros/ListadoLibros";
import Navegacion from "./componentes/Navegacion";
import AgregarLibro from "./libros/AgregarLibro";
import EditarLibro from "./libros/EditarLibro"; // [NUEVO]

function App() {
  return (
    <div>
      <Navegacion />

      <Routes>
        <Route path="/" element={<ListadoLibros />} />
        <Route path="/agregar" element={<AgregarLibro />} />
        <Route path="/editar/:id" element={<EditarLibro />} /> {/* [NUEVO] */}
      </Routes>
    </div>
  );
}

export default App;