import { Title } from "@/components";
import RecipesList from "./RecipesList";
import Navbar from "@/components/Navbar";
import "./RecipesList.css";
import { useGlobalContext } from "../../context/AppContext";

const Recipes = () => {
  const { loading, recipes, error } = useGlobalContext();

  if (error) {
    return (
      <>
        <Title label="Recipes list" />
        Ops... Something went wrong
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <RecipesList loading={loading} recipes={recipes} />
      </div>
    </>
  );
};

export default Recipes;
