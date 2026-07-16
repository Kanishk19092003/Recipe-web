import { createContext, useState } from "react"
  
export const recipecontext = createContext(null);

const RecipeContex = (props) => {

    const[data,setData] = useState([]);

  return (
    <recipecontext.Provider value={{data,setData}}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContex