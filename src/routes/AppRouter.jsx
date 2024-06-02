import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styles from "../assets/app.module.css";
import HSL from "../pages/HSL";
import RGB from "../pages/RGB";
import Home from "../pages/Home";

export const AppRouter = () => {
  const DEFAULT_ROUTE = "/home";
  return (
    <BrowserRouter>
      {/* <div style={styles.fill}> */}
      {/* <div style={styles.content}> */}
      <Routes>
        <Route path="/" element={<Navigate to={DEFAULT_ROUTE} />} />
        <Route path="/home" element={<Home />}>
          <Route path="hsl/:h/:s/:l" element={<HSL />} />
          <Route path="rgb/:r/:g/:b" element={<RGB />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/hsl/:h/:s/:l" element={<HSL />} />
        <Route path="/rgb/:r/:g/:b" element={<RGB />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      {/* </div> */}
      {/* </div> */}
    </BrowserRouter>
  );
};

const ErrorPage = () => {
  return <div>404</div>;
};
