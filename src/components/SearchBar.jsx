import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id, setId]= useState("")

   function handleCahnge(event) {
      setId(event.target.value);
      
   }
  

   return (
      <div className="search">
         <input onChange={handleCahnge} type='search' name="search" value={id} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
