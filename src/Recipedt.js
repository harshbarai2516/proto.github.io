import React, { useState } from "react";
import RecipeDetailsdt from "./RecipeDetailsdt.js";
// ns25.domaincontrol.com
// ns26.domaincontrol.com

export const Recipedt = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="reciiebigdt">
      <div className="recipedt">
        <h2>{label}</h2>
        <br/>
        <img src={image} alt="" />
        <br />
        <div className="referencedt">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Recipie
          </a>
        </div>
        <br />
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetailsdt ingredients={ingredients} />}
      </div>
    </div>
  );
};
