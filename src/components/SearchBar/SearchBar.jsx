import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId]= useState("")

   function handleCahnge(event) {
      setId(event.target.value);
      
   }
  

   return (
      <div className={style.bar}>
         <input onChange={handleCahnge} type='search' className={style.searchInput} name="search" value={id} />
         <button type="button" className={style.searchButton} onClick={()=>onSearch(id)}>Add</button>
      </div>
   );
}
