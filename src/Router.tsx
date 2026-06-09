import { Route, Routes, Navigate } from "react-router-dom";

import { Recipe, Recipes, ContactUs } from "./Pages";
import { ROUTES } from "./constants";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.recipes} element={<Recipes />} />
      <Route path={ROUTES.recipe} element={<Recipe />} />
      <Route path={ROUTES.contactUs} element={<ContactUs />} />
      <Route path="*" element={<Navigate to={ROUTES.recipes} replace />} />
    </Routes>
  );
};

export default Router;
