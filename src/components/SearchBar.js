import logo from './images/weather-app.png'
import React, { useRef } from "react";
import { HiMagnifyingGlassCircle } from 'react-icons/hi2'

const SearchBar = () => {
    const inputRef = useRef(null);

    return (
        <div className="header">
            <div className="logo">
                <img 
                    src={logo} 
                    width="100px" 
                    height="100px"/>
            </div>

            <div className="search-bar">
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder='City name'/>
                <button type='button' className="search-button">
                    <HiMagnifyingGlassCircle size="3rem" />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;