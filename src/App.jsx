import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AppRouter>
        <Home />
      </AppRouter>
    </BrowserRouter>
  );
}

export default App;
