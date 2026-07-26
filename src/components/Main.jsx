import { useState } from "react";
export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);
  const ingrdientList = ingredients.map((ingr, index) => {
    return <li key={index}>{ingr}</li>;
  });
  const addIngredient = (formData) => {
    let newIngredient = formData.get("ingredient");
    setIngredients((prevList) => {
      return [...prevList, newIngredient];
    });
  };
  return (
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
      <section className="ingr-section">
        <h1>Ingredients on hand:</h1>
        <ul className="ingr-list">{ingrdientList}</ul>
      </section>
      <section className="recipe-section">
        <div className="recipe-div">
          <h3>Ready for a recipe?</h3>
          <span>Generate a recipe from your list of ingredients.</span>
        </div>
        <button>Get a recipe</button>
      </section>
    </main>
  );
}
