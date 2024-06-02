import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import styles from '../assets/app.module.css';
import '../assets/app.module.css';
import HSL from "../pages/HSL";
import RGB from "../pages/RGB";
import Home from "../pages/Home";

export const AppRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      {/* TransitionGroup se encarga de vigilar el estado de los elementos de las rutas */}
      <CSSTransition
        key={location.key} // sí o sí hay que pasarle ésto para que TransitionGroup pueda vigilar bien
        timeout={1000} // timeout determina el tiempo de convivencia de los elementos entering y exiting
        // className={styles.fade}
        className='fade'
      >
        <Routes location={location}>
          <Route path="/" element={<Home />}>
            <Route path="hsl/:h/:s/:l" element={<HSL />} />
            <Route path="rgb/:r/:g/:b" element={<RGB />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const ErrorPage = () => {
  return <div>404</div>;
};
