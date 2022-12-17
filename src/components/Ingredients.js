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
    ruccola: 20,
    pilze: 20,
    artischocken: 20,
    gemuese: 30,
  };

  const getIngredients = (portions) => {
    if (portions === 1) return singlePortionIngredients;
    console.log(props.pizzaSorte)
    const ingredients = {};
    for (const ingr in singlePortionIngredients) {
      ingredients[ingr] = Math.round(singlePortionIngredients[ingr] * portions);
      if (ingr === "ruccola"){ ingredients[ingr] = Math.round(singlePortionIngredients[ingr] * props.pizzaSorte.filter(x => x == 2).length) }
      if (ingr === "pilze"){ ingredients[ingr] = Math.round(singlePortionIngredients[ingr] * props.pizzaSorte.filter(x => x == 3).length) }
      if (ingr === "gemuese"){ ingredients[ingr] = Math.round(singlePortionIngredients[ingr] * props.pizzaSorte.filter(x => x == 4).length) }
      if (ingr === "artischocken"){ ingredients[ingr] = Math.round(singlePortionIngredients[ingr] * props.pizzaSorte.filter(x => x == 5).length) }
    }
    console.log(ingredients)
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

  
  const hanleDoneChange = () => {

  }

  useEffect(() => {
    handlePortionChange();
  }, [props.portions, props.pizzaSorte]);

  return (
    <div>
      <h1 className="text-2xl mt-6">Zutaten</h1>
      <ul>
      {Object.keys(ingredients).map((key, index) => {
        return(
          <div key={index}>
            <h2 className="first-letter:uppercase">{key} {ingredients[key]} g</h2>
            
          </div>
        )
      })}
      </ul>  
    </div>
  );
};

export default Ingredients;