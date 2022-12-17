import logo from './logo.svg';

import { useEffect, useState } from 'react';
import Ingredients from './components/Ingredients';
import Shoppinglist from './components/Shoppinglist';
import Timetable from './components/Timetable';

function App() {

  // Liste erstellen, welche so viel Einträge wie Portionen hat
  const updatePizza_Sort = (portions) => {
    const L = Array.from({ length: portions }, () => 1)
    setPizzaSorte(L)

  }

  // Daten aus Child Komponent an Partner Komponent übergeben Portionen > App.js
  const [portions, setPortions] = useState(5);

  const [pizzaSorte, setPizzaSorte] = useState([1,1,1,1,1]);

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
      <button index='0' className={viewIndex == 0 ? "bg-black text-gold text-xs uppercase p-4 mr-2 ml-2 tracking-widest" : "bg-black text-light text-xs uppercase p-4 mr-2 ml-2 tracking-widest"} onClick={() => changeViewIndex('0')}>
      <svg className={viewIndex == 0 ? 'fill-gold text-center h-6 ml-auto mr-auto mb-1' : 'fill-light text-center h-6 ml-auto mr-auto mb-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M540.9 56.77C493.8 39.74 449.6 31.58 410.9 32.02C352.2 32.96 308.3 50 288 59.74C267.7 50 223.9 32.98 165.2 32.04C125.8 31.35 82.18 39.72 35.1 56.77C14.02 64.41 0 84.67 0 107.2v292.1c0 16.61 7.594 31.95 20.84 42.08c13.73 10.53 31.34 13.91 48.2 9.344c118.1-32 202 22.92 205.5 25.2C278.6 478.6 283.3 480 287.1 480s9.37-1.359 13.43-4.078c3.516-2.328 87.59-57.21 205.5-25.25c16.92 4.563 34.5 1.188 48.22-9.344C568.4 431.2 576 415.9 576 399.2V107.2C576 84.67 561.1 64.41 540.9 56.77zM264 416.8c-27.86-11.61-69.84-24.13-121.4-24.13c-26.39 0-55.28 3.281-86.08 11.61C53.19 405.3 50.84 403.9 50 403.2C48 401.7 48 399.8 48 399.2V107.2c0-2.297 1.516-4.531 3.594-5.282c40.95-14.8 79.61-22.36 112.8-21.84C211.3 80.78 246.8 93.75 264 101.5V416.8zM528 399.2c0 .5938 0 2.422-2 3.969c-.8438 .6407-3.141 2.063-6.516 1.109c-90.98-24.6-165.4-5.032-207.5 12.53v-315.3c17.2-7.782 52.69-20.74 99.59-21.47c32.69-.5157 71.88 7.047 112.8 21.84C526.5 102.6 528 104.9 528 107.2V399.2z"/></svg>
        Start</button>
      {/*<button index='1' className='bg-black text-gold p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex('1')}>Zutaten</button>*/}
      <button index='2' className={viewIndex == 2 ? "bg-black text-gold text-xs uppercase p-4 mr-2 ml-2 tracking-widest" : "bg-black text-light text-xs uppercase p-4 mr-2 ml-2 tracking-widest"} onClick={() => changeViewIndex('2')}>
      <svg className={viewIndex == 2 ? 'fill-gold text-center h-6 ml-auto mr-auto mb-1' : 'fill-light text-center h-6 ml-auto mr-auto mb-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/></svg>
        Einkauf
        </button>
      <button index='3' className={viewIndex == 3 ? "bg-black text-gold text-xs uppercase p-4 mr-2 ml-2 tracking-widest" : "bg-black text-light text-xs uppercase p-4 mr-2 ml-2 tracking-widest"} onClick={() => changeViewIndex('3')}>
      <svg className={viewIndex == 3 ? 'fill-gold text-center h-6 ml-auto mr-auto mb-1' : 'fill-light text-center h-6 ml-auto mr-auto mb-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M540.9 56.77C493.8 39.74 449.6 31.58 410.9 32.02C352.2 32.96 308.3 50 288 59.74C267.7 50 223.9 32.98 165.2 32.04C125.8 31.35 82.18 39.72 35.1 56.77C14.02 64.41 0 84.67 0 107.2v292.1c0 16.61 7.594 31.95 20.84 42.08c13.73 10.53 31.34 13.91 48.2 9.344c118.1-32 202 22.92 205.5 25.2C278.6 478.6 283.3 480 287.1 480s9.37-1.359 13.43-4.078c3.516-2.328 87.59-57.21 205.5-25.25c16.92 4.563 34.5 1.188 48.22-9.344C568.4 431.2 576 415.9 576 399.2V107.2C576 84.67 561.1 64.41 540.9 56.77zM264 416.8c-27.86-11.61-69.84-24.13-121.4-24.13c-26.39 0-55.28 3.281-86.08 11.61C53.19 405.3 50.84 403.9 50 403.2C48 401.7 48 399.8 48 399.2V107.2c0-2.297 1.516-4.531 3.594-5.282c40.95-14.8 79.61-22.36 112.8-21.84C211.3 80.78 246.8 93.75 264 101.5V416.8zM528 399.2c0 .5938 0 2.422-2 3.969c-.8438 .6407-3.141 2.063-6.516 1.109c-90.98-24.6-165.4-5.032-207.5 12.53v-315.3c17.2-7.782 52.69-20.74 99.59-21.47c32.69-.5157 71.88 7.047 112.8 21.84C526.5 102.6 528 104.9 528 107.2V399.2z"/></svg>
        Rezept
        </button>
      </div>

      <div className='m-10 pb-20'>

      <div className={viewIndex === "0" ? "visible" : "hidden"}>
      <div className=''>
            <form className='flex flex-wrap'>
                <label className="mr-4">
                    <span className="block text-sm font-medium text-slate-700 mb-2">Anzahl Pizzen:</span>
                    <input className="border-2 border-black p-2" type="number" value={portions} onChange={handlePortionChange}/>
                </label>
                <label className="">
                    <span className="block text-sm font-medium text-slate-700 mb-2">Pizza finito um:</span>
                    <input className="border-2 border-black p-2" type="datetime-local" value={time} onChange={handleTimeChange}/>
                </label>
            </form>
        </div>
        <div>
          <h1 className='text-xl mt-10 mb-5'>{portions} Pizzas wählen:</h1>

          <div className='mb-4 flex text-center flex-wrap -m-2'>
          { portions > 0 &&
              Object.keys(pizzaSorte).map( (item) => (
                <div className='w-32 h-32 bg-light p-4 m-2'>
                <h1 className='tracking-widest font-bold mt-4'>Pizza {item}</h1>
                <select className='py-2.5 px-0 w-full text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:text-black focus:border-gray-200 peer' defaultValue={pizzaSorte[item]} onChange={ (event) => 
                    {
                      var value = event.target.value; 
                      var k = [...pizzaSorte];
                      k[item] = value;
                      setPizzaSorte(k);
                    } 
                    } >
                <option value="1" className='text-center'>Margerita</option>
                <option value="2" className='text-center'>Ruccola</option>
                <option value="3" className='text-center'>Funghi</option>
                <option value="4" className='text-center'>Verdura</option>
                <option value="5" className='text-center'>Capricciosa</option>
                </select>
                </div>
              ))
          }
          </div>
          <div>{pizzaSorte}</div>
          <div>Mehl: {ingredients.mehl}</div>
          <div>Ruccola: {ingredients.ruccola}</div>
          <div>Funbghi: {ingredients.pilze}</div>
          <div>art: {ingredients.artischocken}</div>
          

        </div>
      </div>
      
      <div className={viewIndex === "1" ? "visible" : "hidden"} >
        <Ingredients portions={portions} pizzaSorte={pizzaSorte} setIngredients={setIngredients}></Ingredients>
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
