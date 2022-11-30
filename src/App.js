import logo from './logo.svg';

import { useState } from 'react';
import Ingredients from './components/Ingredients';
import Shoppinglist from './components/Shoppinglist';
import Timetable from './components/Timetable';

function App() {

  // Daten aus Child Komponent an Partner Komponent übergeben Portionen > App.js
  const [portions, setPortions] = useState(10);


  // Portionen changer einblenden
  const [view, setView] = useState(true);
  const [viewIndex, setViewIndex] = useState("0");
  //Portionen von Child an App übergeben
  //
  const [ingredients, setIngredients] = useState({});
  const [time, setTime] = useState("2022-12-01T18:00")



  const handlePortionChange = event => {
    setPortions(event.target.value);
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };


  const changeViewIndex = (index) => {
    var newViewIndex = viewIndex;
    newViewIndex = index;
    setViewIndex(newViewIndex);
  }

// Portionen changer einblenden 
//-----------------------------------------
/*
  const changeView = () => {
    var newView = view
    if(newView === true) {
        newView = false;
        
    } else {
        newView = true; 
    }
    setView(newView);
}
*/
//-----------------------------------------


  return (
    <div className="font-sofia">
      <div className='text-center bg-black text-gold font-light p-10 tracking-widest uppercase text-2xl'>Pizzart</div>

      <div className='h-15 bg-black fixed bottom-0 w-full flex justify-center'>
      <button index='0' className='bg-black text-gold p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex('0')}>Start</button>
      <button index='1' className='bg-black text-gold p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex('1')}>Zutaten</button>
      <button index='2' className='bg-black text-gold p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex('2')}>Einkaufliste</button>
      <button index='3' className='bg-black text-gold p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex('3')}>Rezept</button>
      </div>

      <div className='m-10 pb-20'>

      <div className={viewIndex === "0" ? "visible" : "hidden"}>
      <div className='text-center'>
            <form>
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Anzahl Portionen:</span>
                    <input className="border-2 border-black m-2 p-2" type="number" value={portions} onChange={handlePortionChange}/>
                </label>
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Pizza finito um:</span>
                    <input className="border-2 border-black m-2 p-2" type="datetime-local" value={time} onChange={handleTimeChange}/>
                </label>
            </form>
        </div>
      </div>
      
      <div className={viewIndex === "1" ? "visible" : "hidden"} >
        <Ingredients portions={portions} setIngredients={setIngredients}></Ingredients>
      </div>
      
      <div className={viewIndex === "2" ? "visible" : "hidden"} >
      <Shoppinglist category="Einkaufsliste" ingredients={ingredients}></Shoppinglist>
      </div>

      <div className={viewIndex === "3" ? "visible" : "hidden"}>
      <Timetable time={time} ingredients={ingredients} portions={portions}></Timetable>
      </div>

      </div>
    </div>
  );
}

export default App;
