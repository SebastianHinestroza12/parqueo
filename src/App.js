import './App.css';
import { Route, Routes } from "react-router-dom";
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { EntranceParking } from './components/EntranceParking';
import { DatosRegistros } from './components/DatosRegistro';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/registro-vehiculos" element={<Home />} />
        <Route path="/ingreso-parqueadero" element={<EntranceParking />} />
        <Route path="/datos-registros" element={<DatosRegistros />} />
      </Routes>
    </>
  );
}

export default App;
