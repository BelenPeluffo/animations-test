import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { AppRouter } from "./routes/AppRouter";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        {/* Ponemos a BrowserRouter afuera del AppRouter porque si no no podíamos usar useLocation en AppRouter
    Ya que para usarlo sí o sí el componente en que lo llamamos debe estar contenido (por fuera) por un Router */}
        <AppRouter>
          <Home />
        </AppRouter>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
