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
  const onSubmitMessage = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let newIngredient = formData.get("ingredient");
    setIngredients((prevList) => {
      return [...prevList, newIngredient];
    });
  };
  return (
    <main>
      <form onSubmit={onSubmitMessage}>
        <input
          type="text"
          aria-label="Add ingredients"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>+ Add ingredients</button>
      </form>
      <ul className="ingr-list">{ingrdientList}</ul>
    </main>
  );
}
