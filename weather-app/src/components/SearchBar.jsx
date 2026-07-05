import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
   const navigate =useNavigate();
  const handleSearch = () => {
  if (!search.trim()) return;
  onSearch(search);
  setSearch("");
    navigate(`/weather?city=${search}`);
};
console.log("onSearch:", onSearch);
console.log("typeof onSearch:", typeof onSearch);
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

  return (
    <div className="search-bar-wrapper mb-3">
      <input
        className="search-input"
        type="text"
        placeholder="Search by city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-btn"
        onClick={handleSearch}
      >
       Search
      </button>
    </div>
  );
};

export default SearchBar;