import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

const SearchBar = ({ placeholder = "Buscar...", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handlekeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex flex-row items-center justify-center py-15 gap-1">
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handlekeyDown}
        className="border bg-primary-300/30 border-gray-300 dark:border-gray-700 px-4 py-2 rounded-l-2xl outline-none "
      />
      <button
      onClick={handleSearch}
      
      className="border border-gray-300 bg-primary-300 dark:border-gray-700 dark:bg-primary-700 dark:text-white px-4 py-2 rounded-r-2xl outline-none active:scale-95 cursor-pointer transition duration-75">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
