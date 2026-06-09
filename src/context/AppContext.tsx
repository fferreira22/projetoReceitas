import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import "../Api.ts";
import type { AppContextType, FavoriteType, RecipeType } from "../types.ts";
import { fetchAll } from "../Api.ts";
import { useSearchParams } from "react-router-dom";

const AppContext = createContext<AppContextType | undefined>(undefined);

const getFavoritesFromLocalStorage = (): FavoriteType[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const AppProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams({ title: "" });
  const [favorites, setFavorites] = useState<FavoriteType[]>(
    getFavoritesFromLocalStorage()
  );

  const fetch = async (searchValue: string) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const recipes = await fetchAll(searchValue);

      setRecipes(recipes);
    } catch (e: any) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetch(searchParams.get("title") || "");
  }, [searchParams]);

  // Add Meal to Favorites
  const addToFavorites = (id: string) => {
    //mudar isto
    const alreadyFavorite = favorites.find((recipe) => recipe.id === id);

    if (alreadyFavorite) return;

    const mealFav = recipes.find((recipe) => recipe.id === id);

    if (!mealFav) return;

    const updatedFavorites = [...favorites, mealFav];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Remove Meal from Favorites
  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        recipes,
        error,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
