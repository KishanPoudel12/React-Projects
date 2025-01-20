import React, { useCallback, useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import Card from "../components/Card";

function Recipes() {
  const [searchItem, setSearchItem] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchItem = useCallback(
    async (searchItem) => {
      const url = `https://dummyjson.com/products/search?q=${searchItem}`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        if (result) {
          setLoading(false);
          setRecipes(result.products);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    },
    [searchItem]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setSearchItem(query);
      }, 3000),
    [FetchItem]
  );

  useEffect(() => {
    FetchItem(searchItem);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchItem, FetchItem]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchItem(query);
    debouncedSearch(query);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    FetchItem(searchItem);
  };

  return (
    <div className="p-9 z-50 overflow-x-auto overflow-y-auto min-h-screen dark:bg-gray-900 bg-white">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
        ITEMS
      </h1>
      <div className="search-container flex justify-center items-center mb-4">
        <input
          type="text"
          id="search-item"
          value={searchItem}
          onChange={handleSearchChange}
          className="border dark:border-gray-600 border-gray-300 rounded-l px-4 py-2 w-1/2 dark:bg-gray-700 dark:text-white"
          placeholder="Search for a recipe..."
        />
        <button
          type="submit"
          onClick={handleSearchClick}
          className="bg-orange-500 text-white rounded-r px-4 py-2"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-y-4">
        {recipes && recipes.length > 0
          ? recipes.map((recipe) => (
              <div className="w-1/3 px-1" key={recipe.id}>
                <Card recipe={recipe} />
              </div>
            ))
          : null}
        {loading ? (
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Loading !Please Wait
          </h1>
        ) : null}
        {error ? (
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Error : {error}
          </h1>
        ) : null}
      </div>
    </div>
  );
}

export default Recipes;
