import { useState } from "react"
import { createContext } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const RecipeContext = createContext(null);

const RecipeContextProvider = (props) => {

    const[data,setData] = useState([{
  "id": 1,
  "title": "Classic Margherita Pizza",
  "ingredients": [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
  ],
  "instructions": [
    "Preheat the oven to 475°F (245°C).",
    "",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],

  "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
  Chef : "lala bhai",
  "category":"Dinner",
  description: "Roll out the pizza dough and spread tomato sauce evenly."
}]);

  return (
    <RecipeContext.Provider value={{data,setData}}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider;