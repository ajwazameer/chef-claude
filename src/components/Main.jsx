import { useState, useRef, useEffect } from "react";
import Ingredient from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromGroq } from "../../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (formData) => {
    let newIngredient = formData.get("ingredient");
    setIngredients((prevList) => {
      return [...prevList, newIngredient];
    });
  };

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    console.log("getting-recipe");
    const recipeResponse = await getRecipeFromGroq(ingredients);
    console.log(recipeResponse);
    console.log("above is the recipe");
    setRecipe(recipeResponse);
    console.log(`Recipe seted: ${recipe}`);
  }

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe != "" && recipeSection.current != null)
      recipeSection.current.scrollIntoView();
  }, [recipe]);

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
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      ) : null}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </>
  );
}
