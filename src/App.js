import logo from './logo.svg';

import { useEffect, useState } from 'react';
import Ingredients from './components/Ingredients';
import Shoppinglist from './components/Shoppinglist';
import Timetable from './components/Timetable';

function App() {

  // Liste erstellen, welche so viel Einträge wie Portionen hat
  const updatePizza_Sort = (portions) => {
    const L = Array.from({ length: portions }, () => 1)
    setData(L)

  }


  // Daten aus Child Komponent an Partner Komponent übergeben Portionen > App.js
  const [portions, setPortions] = useState(5);

  const [data, setData] = useState([1,1,1,1,1]);

  // Portionen changer einblenden
  const [view, setView] = useState(true);
  const [viewIndex, setViewIndex] = useState("0");
  //Portionen von Child an App übergeben
  //
  const [ingredients, setIngredients] = useState({});
  const [time, setTime] = useState("2022-12-01T18:00")

  const handlePortionChange = event => {
    setPortions(event.target.value);
    updatePizza_Sort(event.target.value);
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const changeViewIndex = (index) => {
    var newViewIndex = viewIndex;
    newViewIndex = index;
    setViewIndex(newViewIndex);
  }

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
      <div className=''>
            <form className='flex flex-wrap'>
                <label className="w-1/2">
                    <span className="block text-sm font-medium text-slate-700 mb-2">Anzahl Portionen:</span>
                    <input className="border-2 border-black p-2" type="number" value={portions} onChange={handlePortionChange}/>
                </label>
                <label className="w-1/2">
                    <span className="block text-sm font-medium text-slate-700 mb-2">Pizza finito um:</span>
                    <input className="border-2 border-black p-2" type="datetime-local" value={time} onChange={handleTimeChange}/>
                </label>
            </form>
        </div>
        <div>
          <h1 className='text-xl mt-10 mb-5'>{portions} Pizzas wählen:</h1>

          <div className='mb-4 flex text-center flex-wrap -m-2'>
          { portions > 0 &&
              Object.keys(data).map( (item) => (
                <div className='w-32 h-32 bg-light p-4 m-2'>
                <h1 className='tracking-widest font-bold mt-4'>Pizza {item}</h1>
                <select className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer' defaultValue={data[item]} onChange={ (event) => 
                    {
                      var value = event.target.value; 
                      var k = [...data];
                      k[item] = value;
                      setData(k);
                    } 
                    } >
                <option value="1">Margerita</option>
                <option value="2">Diavolo</option>
                <option value="3">Funghi</option>
                <option value="4">Hawaii</option>
                </select>
                </div>
              ))
          }
          </div>
          <div>{data}</div>
          

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



/*
   /{Object.keys(pizzaSorte).map((key, index) => {
              return(
              <div key={index}>
                <h2 className="first-letter:uppercase">{key} {pizzaSorte[key]}</h2>
              </div>
              )

              })}
              */
