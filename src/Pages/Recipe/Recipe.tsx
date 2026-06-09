import { useNavigate, useParams } from "react-router-dom";
import { Title } from "@/components";
import { fetchById } from "@/Api";
import { useState, useEffect } from "react";
import type { RecipeType } from "@/types";
import "./Recipe.css";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoIosTime } from "react-icons/io";
import Navbar from "@/components/Navbar";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<RecipeType>();

  const fetch = async () => {
    if (loading) {
      return;
    }

    if (!id) {
      navigate(-1);
      return;
    }

    setLoading(true);

    try {
      const data = await fetchById(id);

      setRecipe(data);
    } catch (e: any) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <>
        <Title label="Recipe" />
        loading...
      </>
    );
  }

  if (error || !recipe) {
    return (
      <>
        <Title label="Recipe" />
        Ops... Something went wrong
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="recipe-first">
        <div className="recipe-info">
          <Title label={recipe.title} />
          <div className="meta">
            <span>
              <IoIosTime /> {recipe.time} min
            </span>
            <span>
              <PiForkKnifeFill /> {recipe.portions} porções
            </span>
          </div>
          <div className="description">
            <span>{recipe.description}</span>
          </div>
        </div>
        <div className="recipe-image">
          <img src={recipe.url} alt={recipe.title} className="recipe-img" />
        </div>
      </div>
      <div className="recipe-second">
        {/* INGREDIENTS */}
        <div className="ingredients">
          <h2>Ingredientes</h2>
          <ul>
            {recipe.ingredients.map((ingredient: string) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* PREPARATION */}
        <div className="preparation">
          <h2>Preparação</h2>
          <ol>
            {recipe.instructions.map((instruction: string) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="footer">
        <button className="back-button" onClick={() => navigate(-1)}>
          {"Lista Receitas"}
        </button>
      </div>
    </>
  );
};

export default Recipe;
