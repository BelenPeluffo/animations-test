import { Routes, Route, useLocation } from "react-router-dom";
import "../assets/app.module.css";
import HSL from "../pages/HSL";
import RGB from "../pages/RGB";
import Home from "../pages/Home";

export const AppRouter = () => {
  const location = useLocation();
  console.log("location?", location);
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />}>
        <Route path="age">
          <Route path="asc"/>
          <Route path="desc"/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

const ErrorPage = () => {
  return <div>404</div>;
};
