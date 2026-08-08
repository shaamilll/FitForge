import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageTransition from "./components/PageTransition";
import {
  HomePage,
  ShopPage,
  MenPage,
  WomenPage,
  CollectionsPage,
  AboutPage,
  NotFoundPage,
} from "./pages/RoutePages";

/**
 * App.jsx
 *
 * Root component of the FitForge application.
 * This is intentionally left minimal for now.
 *
 * As we build components step-by-step, this file will grow to:
 *   - Wrap the app in Context Providers (Cart, Wishlist, Auth)
 *   - Set up React Router routes for every page
 *   - Render the Navbar + Footer as persistent layout
 */

function App() {
  return (
    <div className="min-h-screen bg-forge-white text-forge-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={
            <PageTransition>
              <ShopPage />
            </PageTransition>
          }
        />
        <Route
          path="/men"
          element={
            <PageTransition>
              <MenPage />
            </PageTransition>
          }
        />
        <Route
          path="/women"
          element={
            <PageTransition>
              <WomenPage />
            </PageTransition>
          }
        />
        <Route
          path="/collections"
          element={
            <PageTransition>
              <CollectionsPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
