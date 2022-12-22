import { useState } from 'react';
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
  const [portions, setPortions] = useState(10);

  const [pizzaSorte, setPizzaSorte] = useState([1,1,1,1,1,1,1,1,1,1]);

  // Portionen changer einblenden
  const [viewIndex, setViewIndex] = useState("0");
  //Portionen von Child an App übergeben
  //
  const [ingredients, setIngredients] = useState({});
  const [time, setTime] = useState("2023-12-11T18:30")

  const handlePortionChange = event => {
    setPortions(event.target.getAttribute('numpizza'));
    updatePizza_Sort(event.target.getAttribute('numpizza'));
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const changeViewIndex = (index) => {
    var newViewIndex = viewIndex;
    newViewIndex = index;
    setViewIndex(newViewIndex);
  }

  const subHours = (hours, date = new Date()) => {
    const newDate = new Date(date.getTime() - hours * 60 * 60 * 1000)
    var newMinutes = newDate.getMinutes()
    if (newMinutes === 0){
        newMinutes = "00"        
      }
    if (newMinutes === 1 || newMinutes === 2 || newMinutes === 3 || newMinutes === 4 || newMinutes === 5 || newMinutes === 6 || newMinutes === 7 || newMinutes === 8 || newMinutes === 9){
      newMinutes = "0" + newMinutes;
    }
    const newHours = newDate.getHours()
    const timeFormated = newHours + ":" + newMinutes
    return timeFormated;
}
const [dateError, setDateError] = useState(false)

const convertInput = (input) => {
    if (input !== ""){
      var d = new Date();
      // DateError aktivieren falls Datum in Vergangenheit liegt.
      if (dateError === false & Date.parse(input) < Date.parse(d)){
          setDateError(prevCheck => !prevCheck);
      }
      // DateError deaktivieren, falls Datum nicht in Vergangenheit liegt.
      if (dateError === true & Date.parse(input) > Date.parse(d)){
        setDateError(prevCheck => !prevCheck);
      }
      const [dateValues, timeValues] = input.split("T")
      const [year, month, day] = dateValues.split("-")
      const [hours, minutes] = timeValues.split(":")
      const date = new Date(+year, +month - 1, +day, +hours, +minutes, "00");
      return date
    }
}

const finishTime = convertInput(time)
const anzahlPizzaButtons = [];

  return (
    <div className="font-sofia">
      <div className='text-center bg-black text-gold font-light p-10 tracking-widest uppercase text-2xl'>Pizzart
        <div className='text-xs mt-2 font-normal tracking-wider text-gold'>
          {portions} Pizza<span className={portions > 1 ? "" : "hidden"}>s</span> @ {subHours(0, finishTime)}
        </div>
      </div>

        <div className='bg-black fixed bottom-0 w-full flex justify-center h-18 z-50 pb-2'>
          <button index='0' key="0" className={viewIndex === "0" ? "bg-black text-gold text-xs uppercase p-4 mr-2 ml-2 tracking-widest" : "bg-black text-light text-xs uppercase p-4 mr-2 ml-2 tracking-widest"} onClick={() => changeViewIndex('0')}>
            <svg className={viewIndex === "0" ? 'fill-gold text-center h-6 ml-auto mr-auto mb-1' : 'fill-light text-center h-6 ml-auto mr-auto mb-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z"/></svg>
            Start
          </button>
          {/*<button index='1' className='bg-black text-gold p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex('1')}>Zutaten</button>*/}
          <button index='2'key="1" className={viewIndex === "2" ? "bg-black text-gold text-xs uppercase p-4 mr-2 ml-2 tracking-widest" : "bg-black text-light text-xs uppercase p-4 mr-2 ml-2 tracking-widest"} onClick={() => changeViewIndex('2')}>
            <svg className={viewIndex === "2" ? 'fill-gold text-center h-6 ml-auto mr-auto mb-1' : 'fill-light text-center h-6 ml-auto mr-auto mb-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/></svg>
            Einkauf
          </button>
          <button index='3' key="2" className={viewIndex === "3" ? "bg-black text-gold text-xs uppercase p-4 mr-2 ml-2 tracking-widest" : "bg-black text-light text-xs uppercase p-4 mr-2 ml-2 tracking-widest"} onClick={() => changeViewIndex('3')}>
            <svg className={viewIndex === "3" ? 'fill-gold text-center h-6 ml-auto mr-auto mb-1' : 'fill-light text-center h-6 ml-auto mr-auto mb-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M540.9 56.77C493.8 39.74 449.6 31.58 410.9 32.02C352.2 32.96 308.3 50 288 59.74C267.7 50 223.9 32.98 165.2 32.04C125.8 31.35 82.18 39.72 35.1 56.77C14.02 64.41 0 84.67 0 107.2v292.1c0 16.61 7.594 31.95 20.84 42.08c13.73 10.53 31.34 13.91 48.2 9.344c118.1-32 202 22.92 205.5 25.2C278.6 478.6 283.3 480 287.1 480s9.37-1.359 13.43-4.078c3.516-2.328 87.59-57.21 205.5-25.25c16.92 4.563 34.5 1.188 48.22-9.344C568.4 431.2 576 415.9 576 399.2V107.2C576 84.67 561.1 64.41 540.9 56.77zM264 416.8c-27.86-11.61-69.84-24.13-121.4-24.13c-26.39 0-55.28 3.281-86.08 11.61C53.19 405.3 50.84 403.9 50 403.2C48 401.7 48 399.8 48 399.2V107.2c0-2.297 1.516-4.531 3.594-5.282c40.95-14.8 79.61-22.36 112.8-21.84C211.3 80.78 246.8 93.75 264 101.5V416.8zM528 399.2c0 .5938 0 2.422-2 3.969c-.8438 .6407-3.141 2.063-6.516 1.109c-90.98-24.6-165.4-5.032-207.5 12.53v-315.3c17.2-7.782 52.69-20.74 99.59-21.47c32.69-.5157 71.88 7.047 112.8 21.84C526.5 102.6 528 104.9 528 107.2V399.2z"/></svg>
            Rezept
          </button>
        </div>

      <div className='m-10 pb-20'>

      <div className={viewIndex === "0" ? "visible" : "hidden"}>
        <p className={dateError ? 'text-center mb-2 text-red-700' : "hidden"}>Bitte wähle ein Datum welches in der Zukunft liegt.</p>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>Pizza fertig um:</div>
          <div className='w-1/2'>
            <input className="border-2 border-black p-1 w-full" type="datetime-local" value={time} onChange={handleTimeChange}/></div>
        </div>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>Vorteig (Vortag):</div>
          <div className='w-1/2 mt-2 pb-2'>
            <p>{subHours(26, finishTime)} – {subHours(20, finishTime)} Uhr</p></div>
        </div>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>Hauptteig:</div>
          <div className='w-1/2 mt-2 pb-2'>
            <p>{subHours(3.5, finishTime)} Uhr</p></div>
        </div>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>Pizza fertig:</div>
          <div className='w-1/2 mt-2 pb-2'>
            <p>{subHours(0, finishTime)} Uhr</p></div>
        </div>

        <h1 className='text-2xl mt-12'>Anzahl Pizzas wählen:</h1>
        <div className='flex flex-wrap mt-4 -m-1 text-center'>
          {(() => {
            for (let i = 0; i < 20; i++) {
              anzahlPizzaButtons.push(<div className={portions > i ? 'w-12 h-12 m-1 bg-gold pt-3 cursor-pointer':'w-12 h-12 m-1 bg-light pt-3 cursor-pointer'} numpizza={i+1} key={i} value={i} onClick={handlePortionChange}>{i+1}</div>);
            }
            return anzahlPizzaButtons;
          })()}
          </div>
        <div>
          <h1 className='text-2xl mt-12 mb-5'>Pizzasorte wählen:</h1>

          <div className='mb-4 flex text-center flex-wrap -m-2'>
          { portions > 0 &&
              Object.keys(pizzaSorte).map( (item) => (
                <div className='w-32 h-32 bg-light p-4 m-2' key={item}>
                <h1 className='tracking-widest font-bold mt-4'>Pizza {Number(item)+1}</h1>
                <select className='cursor-pointer py-2.5 px-0 w-full text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:text-black focus:border-gray-200 peer' defaultValue={pizzaSorte[item]} onChange={ (event) => 
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
        </div>
        <h1 className='text-2xl mt-12 pb-4 '>Wichtigste Zutaten:</h1>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>
            Mehl:
          </div>
          <div className='w-1/2 mt-2 pb-2'>
            {ingredients.mehl} g
          </div>
        </div>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>
            Tomatensauce:
          </div>
          <div className='w-1/2 mt-2 pb-2'>
            {ingredients.tomatensauce} g
          </div>
        </div>
        <div className='flex flex-wrap text-xl tracking-wider pt-2 pb-2 border-b-2'>
          <div className='w-1/2 mt-2 pb-2'>
            Mozarella:
          </div>
          <div className='w-1/2 mt-2 pb-2'>
            {ingredients.mozarella} g
          </div>
        </div>
      </div>
      
      <div className={viewIndex === "1" ? "visible" : "hidden"} >
        <Ingredients portions={portions} pizzaSorte={pizzaSorte} setIngredients={setIngredients}></Ingredients>
      </div>
      <div className={viewIndex === "2" ? "visible" : "hidden"} >
        <Shoppinglist category="Einkaufsliste" ingredients={ingredients}></Shoppinglist>
      </div>
      <div className={viewIndex === "3" ? "visible" : "hidden"}>
        <Timetable time={finishTime} ingredients={ingredients} portions={portions}></Timetable>
      </div>
      </div>
    </div>
  );
}

export default App;

