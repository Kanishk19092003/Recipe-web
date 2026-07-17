// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(RecipeContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      Chef: recipe.Chef,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      category: recipe.category,
    },
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    toast.success("Recipe Updated");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    toast.success("Recipe Deleed!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="mt-10 flex">
      {/* left */}
      <div className="left w-1/2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="mt-5 h-[40vh]" src={recipe.image} alt={recipe.title} />
        <h3 className="text-xl mt-2">By: {recipe.Chef}</h3>
      </div>

      {/* right */}
      <form className="right w-1/2" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />

        <small className="text-red-400">This is how error is shown</small>

        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe title"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("Chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("description")}
          placeholder="Start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingredients")}
          placeholder="Start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("instructions")}
          placeholder="Start from here"
        ></textarea>

        <select
          className="block border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="cat 1">Category 1</option>
          <option value="cat 2">Category 2</option>
          <option value="cat 3">Category 3</option>
        </select>

        <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
          Update Recipe
        </button>

        <button
          onClick={DeleteHandler}
          className="mt-5 block bg-red-900 px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
