import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";
import products from "./constants/products";

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
<Hero />
<Categories />
 {/* Temporary ProductGrid test */}
 <div className="max-w-7xl mx-auto px-6 py-12">
        <ProductGrid products={products} />
      </div>

    </div>
  );
}

export default App;