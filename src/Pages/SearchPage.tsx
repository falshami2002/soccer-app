import Navbar from "../Components/Navbar";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import SearchResult from "../Components/SearchResult";

const SearchPage: React.FC = () => {
    const [ searchValue, setSearchValue ] = useState<string | undefined>("");

    const searchRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        console.log(searchRef.current?.value);
        setSearchValue(searchRef.current?.value);
    }

    return (
        <>
            <Navbar />
            <div className="w-screen h-screen max-w-full bg-soccer-league bg-no-repeat bg-cover flex flex-col justify-center items-center">
                <SearchBar searchRef={searchRef} handleSearch={handleSearch}/>
                <SearchResult name={searchValue}/>
            </div>
        </>
    );
}

interface SearchBarProps {
    searchRef: MutableRefObject<HTMLInputElement | null>
    handleSearch: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({searchRef, handleSearch}) => {
    return (
        <div className="form-control fixed top-[10%] w-[50%]">
            <div className="input-group">
                <input ref={searchRef} type="text" placeholder="Search…" className="input w-[90%]" />
                <button onClick={handleSearch} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    );
}

export default SearchPage;