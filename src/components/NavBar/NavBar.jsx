import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import {Link} from "react-router-dom";

export default function NavBar({onSearch, logout, AddRandomCharacter}) {
    return (
     <div className="nav"> 
      <div className="navbar container"> 
      <nav className="nav-list"> 
        <Link to="/home" className="nav-link" > 
        <button className="button">Home</button>
        </Link>
        <Link to="/about" className="nav-link"> 
        <button class="button">About</button>
        </Link>
        <Link to="/favorites" className="nav-link"> 
        <button className="button">Favorites</button>
        </Link>
        <SearchBar onSearch={onSearch} className="button" /> 
        <button onClick={AddRandomCharacter} className="button">Random</button>
        <button onClick={logout} className="button">Sign Out</button>
        </nav>
      </div>
      </div>
    )
}