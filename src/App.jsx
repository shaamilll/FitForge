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
 *
 * Next component: Navbar
 */
function App() {
  return (
    <div className="min-h-screen bg-forge-white text-forge-black">
      <h1 className="font-display text-4xl p-8">
        FitForge project scaffold ready 🏗️
      </h1>
    </div>
  )
}

export default App
