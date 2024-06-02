import { AppRouter } from "./routes/AppRouter";
import Home from "./pages/Home";

function App() {
  return (
    <AppRouter>
      <Home />
    </AppRouter>
  );
}

export default App;
