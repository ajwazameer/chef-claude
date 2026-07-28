export default function IngredientsList(props) {
  const ingredientList = props.ingredients.map((ingr, index) => {
    return <li key={index}>{ingr}</li>;
  });
  return (
    <section>
      <div className="ingr-section">
        <h1>Ingredients on hand:</h1>
        <ul className="ingr-list">{ingredientList}</ul>
      </div>
      {props.ingredients.length > 3 && (
        <div className="recipe-section" ref={props.ref}>
          <div className="recipe-div">
            <h3>Ready for a recipe?</h3>
            <span>Generate a recipe from your list of ingredients.</span>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
