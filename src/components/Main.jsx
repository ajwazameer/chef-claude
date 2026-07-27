import { useState } from "react";
import Ingredient from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const addIngredient = (formData) => {
    let newIngredient = formData.get("ingredient");
    setIngredients((prevList) => {
      return [...prevList, newIngredient];
    });
  };
  const [recipeShown, setRecipeShown] = useState(false);
  const showRecipe = () => {
    setRecipeShown((prevRecipeShown) => true);
  };
  return (
    <>
      <main>
        <form action={addIngredient}>
          <input
            type="text"
            aria-label="Add ingredients"
            placeholder="e.g. oregano"
            name="ingredient"
          />
          <button>+ Add ingredients</button>
        </form>
      </main>
      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} showRecipe={showRecipe} />
      ) : null}
      {recipeShown && <ClaudeRecipe />}
    </>
  );
}
