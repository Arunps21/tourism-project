import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavbarPage from "./components/NavbarPage";
import { lazy, Suspense } from "react";
import SpinnerPage from "./components/SpinnerPage";

function App() {
  const HomePage = lazy(()=>import('./components/HomePage'))
  const PlaceView = lazy(()=>import('./components/PlaceView'))
  const AboutPage = lazy(()=>import('./components/AboutPage'))
  return (
    <>
      <NavbarPage />
      <Suspense fallback={<SpinnerPage/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PlaceView/:id" element={<PlaceView />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
