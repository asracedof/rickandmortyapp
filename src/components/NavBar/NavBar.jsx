import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import {Link} from "react-router-dom";

export default function NavBar({onSearch, logout, AddRandomCharacter}) {
    return (
     <div className="nav"> 
        <Link to="/home"> 
        <button>Home</button>
        </Link>
        <Link to="/about"> 
        <button>About</button>
        </Link>
        <Link to="/favorites"> 
        <button>Favorites</button>
        </Link>
        <SearchBar onSearch={onSearch} /> 
        <button onClick={AddRandomCharacter}>Random</button>
        <button onClick={logout}>Sign Out</button>
      </div>
    )
}