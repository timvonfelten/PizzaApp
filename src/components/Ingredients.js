import { useEffect, useState } from "react";

const Ingredients = (props) => {
  const singlePortionIngredients = {
    mehl: 155,
    wasser: 100,
    hefe: 0.5,
    honig: 0.5,
    salz: 4,
    mozarella: 4,
    tomatensauce: 50,
  };

  const getIngredients = (portions) => {
    if (portions === 1) return singlePortionIngredients;

    const ingredients = {};
    for (const ingr in singlePortionIngredients) {
      ingredients[ingr] = Math.round(singlePortionIngredients[ingr] * portions);
    }
    return ingredients;
  };

  const [ingredients, setIngredients] = useState(
    getIngredients(props.portions)
  );

  const handlePortionChange = () => {
    const ingredients = getIngredients(props.portions);
    setIngredients(ingredients);
    props.setIngredients(ingredients);
  };

  useEffect(() => {
    handlePortionChange();
  }, [props.portions]);

  return (
    <div>
      <h1 className="text-2xl mt-6">Zutaten</h1>
      <ul className="m-4">
        <li>Mehl: {ingredients.mehl} g</li>
        <li>Wasser: {ingredients.wasser} ml</li>
        <li>Hefe: {ingredients.hefe} g</li>
        <li>Honig: {ingredients.honig} g</li>
        <li>Salz: {ingredients.salz} g</li>
        <li>Mozarella: {ingredients.mozarella} g</li>
        <li>Tomatensauce: {ingredients.tomatensauce} g</li>
      </ul>
    </div>
  );
};

export default Ingredients;