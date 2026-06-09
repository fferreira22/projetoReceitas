import { ROUTES } from "@/constants";
import type { RecipeType } from "@/types";
import { generatePath, useNavigate } from "react-router-dom";
import "../../index.css";
import { BsHandThumbsUp } from "react-icons/bs";
import { useGlobalContext } from "../../context/AppContext";
import { Favorites } from "@/components";

type Props = {
  loading: boolean;
  recipes: RecipeType[];
};

const RecipesList = ({ loading, recipes }: Props) => {
  const navigate = useNavigate();
  const { addToFavorites, favorites } = useGlobalContext();

  if (loading) {
    //return "loading...";
  }

  return (
    <>
      {favorites.length > 0 && <Favorites />}
      <section className="section-center">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="single-meal">
            <img
              src={recipe.url}
              alt={recipe.title}
              className="img"
              onClick={() =>
                navigate(generatePath(ROUTES.recipe, { id: recipe.id }))
              }
            />
            <footer>
              <h5>{recipe.title}</h5>
              <button
                className="like-btn"
                onClick={() => addToFavorites(recipe.id)}
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
};

export default RecipesList;
