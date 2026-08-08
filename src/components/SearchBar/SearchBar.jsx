import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    setQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalized = query.trim();

    if (!normalized) {
      navigate("/shop");
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(normalized)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 shadow-sm transition duration-300 focus-within:border-orange-500 focus-within:bg-white"
    >
      <FiSearch className="mr-3 text-lg text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products"
        className="w-full border-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
      />
      {query ? (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="mr-2 rounded-full p-1 text-gray-500 transition hover:bg-gray-200 hover:text-black"
          aria-label="Clear search"
        >
          <FiX className="text-sm" />
        </button>
      ) : null}
      <button
        type="submit"
        className="rounded-full bg-black px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-orange-500"
      >
        Go
      </button>
    </form>
  );
};

export default SearchBar;
