import iconSearh from "@image/search.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div id="search-bar" className="border-b border-black w-[150px] flex gap-2">
      <Image src={iconSearh} alt="icon search" width={20} height={20} />
      <input
        type="text"
        placeholder="search..."
        className="outline-none font-light text-black text-sm w-full"
      />
    </div>
  );
};

export default SearchBar;
