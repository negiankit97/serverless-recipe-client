import React from "react";
import { Link } from "react-router-dom";
import Recipes from "./Recipes";
import About from "./About";

const RecipeHeader: React.FunctionComponent = (): React.ReactElement => {
    const newLocal:React.ReactElement = <Link to="/recipes">Recipes</Link>;
  return (
    <div className="nav-bar">
      <div className="nav-title">FoodMania</div>
      <div className="nav-links">
        {newLocal}
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
};

export default RecipeHeader;
