import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId]= useState("")

   function handleCahnge(event) {
      setId(event.target.value);
      
   }
  

   return (
      <div className={style.bar}>
         <input onChange={handleCahnge} type='search' classname={style.searchInput} name="search" value={id} />
         <button classname={style.searchButton} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
