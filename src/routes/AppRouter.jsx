import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "../assets/app.module.css";
import HSL from "../pages/HSL";
import RGB from "../pages/RGB";
import Home from "../pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className={styles.fill}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="hsl/:h/:s/:l" element={<HSL />} />
              <Route path="rgb/:r/:g/:b" element={<RGB />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const ErrorPage = () => {
  return <div>404</div>;
};
