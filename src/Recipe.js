import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
// ns25.domaincontrol.com
// ns26.domaincontrol.com

export const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="reciiebig">
      <div className="recipe">
        <h2>{label}</h2>
        <br/>
        <img src={image} alt="" />
        <br />
        <div className="reference">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Recipie
          </a>
        </div>
        <br />
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </div>
  );
};
