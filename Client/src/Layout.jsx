import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, Outlet, } from "react-router-dom";
import axios from "axios";
import logo from "./assets/img/logo1.png"
import "./index.css"
import styles from'./Layout.module.css';

function Layout(props) {
   const [characters, setCharacters] = useState([]);
   const [title, setTitle] = useState("Get Schwifty with Rick and Morty");
   const [subtitle, setSubtitle] = React.useState("Discover and Collect Your Favorite Characters");
   let { pathname } = useLocation();

   useEffect(() => {
     switch(pathname){
        case "/home/about":
            setTitle("About the Creator");
            setSubtitle("Wubba Lubba Dub Dub! Here's My Story");
            break;
        case "/home/favorites":
            setTitle("Hall of Fame");
            setSubtitle("A Collection of Your Favorite Characters");
            break;
        default:
            setTitle("Explore the Multiverse");
            setSubtitle("Discover and Collect Your Favorite Characters");
            break;
         }
    },[pathname]);
   
    const onSearch = async (id) => {
       try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
           let exist = characters.find((ch) => ch.id === data.id);
           if (exist) {
             alert("This character already exists in this multiverse");
           } else {
             setCharacters((oldChars) => [...oldChars, data]);
           }
         }
       } catch (error){
           alert('¡That character is not in this universe.Try again!');
         }
    }

    function onClose(id) {
        setCharacters((oldChars) => {
          return oldChars.filter((ch) => ch.id !== id);
        });
    }
    
    const onClear = () => {
        setCharacters([]);
    }

    const checkActive = (status) => status ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.inactive}`;  
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <NavLink to="/home" className={({isActive}) => checkActive(isActive)} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home/favorites" className={({isActive}) => checkActive(isActive)} >Favorites</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home/about" className={({isActive}) => checkActive(isActive)} >About</NavLink>
                            </li>
                            <li onClick={props.logout}>
                                <NavLink to="/" className={({isActive}) => checkActive(isActive) } >Logout</NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className={styles.hero}>
                        <figure className={styles.logo}>
                            <img src={logo} alt="Rick and Morty" />
                        </figure>

                        <div className={styles.title}>
                            <h1>{title}</h1>
                            <p>{subtitle}</p>
                        </div>

                    </div>

                </section>

                <section className={styles.content}>
                    <Outlet context={[characters, onClose, onSearch, onClear]}/>
                </section>

            </div>

        </main>
    );
}

export default Layout;