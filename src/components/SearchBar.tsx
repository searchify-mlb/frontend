import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchQuery: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-row w-full space-x-8 space-between">
      <input
        type="text"
        name="searchQuery"
        className="w-full px-6 py-4 text-sm border rounded-xl"
        placeholder="Search your favorite clip"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="px-8 py-2 text-sm font-bold text-white bg-blue-400 cursor-pointer rounded-xl hover:bg-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
