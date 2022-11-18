import { useState } from "react";

const Portions = (props) => {
  const [portions, setPortions] = useState(props.portions);

  const handleChange = (event) => {
    setPortions(event.target.value);
  };

  function handleClick() {
    props.setPortions(portions);
  }

  return (
    <div>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Anzahl Portionen:
          </span>
          <input type="number" value={portions} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleClick}>
          Anwenden
        </button>
      </form>
    </div>
  );
};
export default Portions;
