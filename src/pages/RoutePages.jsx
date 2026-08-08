import { Link, useSearchParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../constants/products";

const pageShellClasses =
  "mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-20 lg:px-10";

function PageShell({ title, description, eyebrow, children }) {
  return (
    <section className={pageShellClasses}>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center rounded-full border border-black px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
        >
          Browse products
        </Link>
      </div>
      {children}
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export function ShopPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("search") || "").trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    if (!query) return true;

    const haystack = `${product.name} ${product.category}`.toLowerCase();
    return haystack.includes(query);
  });

  return (
    <PageShell
      eyebrow="Shop"
      title="Find the gear that fits your routine"
      description="Search through standout essentials for training, recovery, and everyday comfort."
    >
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        {query ? (
          <p className="mb-6 text-sm text-gray-600">
            Showing results for{" "}
            <span className="font-semibold text-black">{query}</span>
          </p>
        ) : (
          <p className="mb-6 text-sm text-gray-600">
            Explore our latest picks from performance apparel and training
            staples.
          </p>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              rating={product.rating}
              badge={product.badge}
              onAddToCart={() => {}}
              onWishlistToggle={() => {}}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
            No products matched your search. Try another term like “leggings”,
            “tee”, or “shorts”.
          </div>
        )}
      </div>
    </PageShell>
  );
}

export function MenPage() {
  return (
    <PageShell
      eyebrow="Men"
      title="Built for strength and movement"
      description="Discover performance staples that keep up with every workout and every commute."
    >
      <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-black">
            Training essentials
          </h2>
          <p className="mt-3 text-gray-600">
            From compression layers to lightweight outerwear, this edit is made
            for everyday training.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black">
            Everyday comfort
          </h2>
          <p className="mt-3 text-gray-600">
            Soft fabrics, relaxed fits, and premium details that carry from gym
            to street.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

export function WomenPage() {
  return (
    <PageShell
      eyebrow="Women"
      title="Performance pieces with a premium feel"
      description="Explore versatile apparel designed for strength, mobility, and confidence."
    >
      <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-black">
            High-impact training
          </h2>
          <p className="mt-3 text-gray-600">
            Flexible fits and supportive silhouettes for everything from HIIT to
            recovery sessions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-black">
            Elevated essentials
          </h2>
          <p className="mt-3 text-gray-600">
            Modern staples that bring a polished feel to your daily movement and
            gym routine.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

export function CollectionsPage() {
  return (
    <PageShell
      eyebrow="Collections"
      title="Curated drops for every kind of athlete"
      description="Browse featured edits and discover the best of FitForge in one place."
    >
      <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold text-black">Performance</h2>
          <p className="mt-2 text-gray-600">
            Fast, technical, and ready for hard sessions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Recovery</h2>
          <p className="mt-2 text-gray-600">
            Comfort-first layers designed for downtime and movement.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">Essentials</h2>
          <p className="mt-2 text-gray-600">
            Everyday staples that seamlessly fit into your rotation.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A modern fitness brand with purpose"
      description="FitForge blends premium materials, thoughtful design, and a performance-first mindset."
    >
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-gray-600">
          Our mission is to create apparel that feels as good as it performs —
          made for movement, built for confidence, and designed to support every
          step of your routine.
        </p>
      </div>
    </PageShell>
  );
}

export function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Page not found"
      description="The page you’re looking for doesn’t exist or may have moved."
    >
      <Link
        to="/"
        className="inline-flex w-fit items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
      >
        Back home
      </Link>
    </PageShell>
  );
}
