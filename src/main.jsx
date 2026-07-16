import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RecipeContex from "./context/RecipeContex.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContex>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeContex>,
);
