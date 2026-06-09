type FavoriteType = {
  id: string;
  title: string;
  url: string;
};

type AppContextType = {
  loading: boolean;
  recipes: RecipeType[];
  error: boolean;
  favorites: FavoriteType[];
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
};

type RecipeType = {
  id: string;
  //foodType: string;
  title: string;
  description: string;
  url: string;
  time: string;
  portions: string;
  instructions: Array<string>;
  ingredients: Array<string>;
};

export type { RecipeType, AppContextType, FavoriteType };
