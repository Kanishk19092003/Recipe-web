import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeContextProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate()
  const {data,setData} = useContext(RecipeContext);

  const { register, handleSubmit,reset } = useForm();

  const SubmitHandler = (recipe) =>{
    recipe.id = nanoid();

    setData([...data,recipe])
    toast.success("New Recipe Created");
    reset();
    navigate("/recipes")
  }

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
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
      
      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">Save Recipe</button>      
    </form>
  );
};

export default Create;
