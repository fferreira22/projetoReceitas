import { generatePath, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
import { ROUTES } from "@/constants";
import Favorite from "./Favorite";
import "./Favorites.css";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favoritos</h5>
        <div className="favorites-container">
          {favorites.map((recipe) => (
            <Favorite
              key={recipe.id}
              favorite={recipe}
              onClick={() =>
                navigate(generatePath(ROUTES.recipe, { id: recipe.id }))
              }
              onRemove={() => removeFromFavorites(recipe.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
