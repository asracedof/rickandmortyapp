import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFolderHeart, faAddressCard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export default function NavBar({ onSearch, logout, AddRandomCharacter }) {
  return (
    <div className="nav">
      <div className="navbar container">
        <nav className="nav-list">
          <Link to="/home" className="nav-link">
            <button className="button">
              <FontAwesomeIcon icon={faHouse} /> Home
            </button>
          </Link>
          <Link to="/about" className="nav-link">
            <button className="button">
              <FontAwesomeIcon icon={faAddressCard} /> About
            </button>
          </Link>
          <Link to="/favorites" className="nav-link">
            <button className="button">
              <FontAwesomeIcon icon={faFolderHeart} /> Favorites
            </button>
          </Link>
          <SearchBar onSearch={onSearch} className="button" />
          <button onClick={AddRandomCharacter} className="button">
            <FontAwesomeIcon icon={faHeartRegular} /> Random
          </button>
          <button onClick={logout} className="button">
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out
          </button>
        </nav>
      </div>
    </div>
  )
}
