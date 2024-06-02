import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styles from "../assets/app.module.css";
import HSL from "../pages/HSL";
import RGB from "../pages/RGB";

export const AppRouter = () => {
  const DEFAULT_ROUTE = "/hsl/10/90/50";
  return (
    <BrowserRouter>
      {/* <div style={styles.fill}> */}
        {/* <div style={styles.content}> */}
          <Routes>
            <Route path='/' element={<Navigate to={DEFAULT_ROUTE} />}/>
            <Route path="/hsl/:h/:s/:l" element={<HSL />} />
            <Route path="/rgb/:r/:g/:b" element={<RGB />} />
            <Route render={() => <h1>404</h1>} />
          </Routes>
        {/* </div> */}
      {/* </div> */}
    </BrowserRouter>
  );
};
