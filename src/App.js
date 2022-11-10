import logo from './logo.svg';
import Portionen from './components/Portionen';
import { useState } from 'react';
import Zutaten from './components/Zutaten';
import Einkaufsliste from './components/Einkaufsliste';

function App() {

  // Daten aus Child Komponent an Partner Komponent übergeben Portionen > App.js
  const [port, setPort] = useState(10);
  const [zutaten, setZutaten] = useState(1);

  // Portionen changer einblenden
  const [view, setView] = useState(true);
  //Portionen von Child an App übergeben
  const childToParent = (childdata) => {
    setPort(childdata);
  }
  //
  const zutatenToParent = (childdata) => {
    setZutaten(childdata);
  }

  const print = () => {
    console.log("zutaten:", zutaten)
  }
  


// Portionen changer einblenden 
//-----------------------------------------
  const changeView = () => {
    var newView = view
    if(newView === true) {
        newView = false;
        
    } else {
        newView = true; 
    }
    setView(newView);
}
//-----------------------------------------


  return (
    <div className="m-10">
      <div className='tracking-wider border-2'>
      <button className='bg-red-300 p-2' onClick={changeView}>Portionen ändern</button>
      <div className={view ? "hidden" : "visible"}>
        <Portionen className="m-20" childToParent={childToParent}/>
      </div>
      </div> 
      <br></br>
      Anzahl Portionen: {port} <br></br>
      <Zutaten zutatenToParent={zutatenToParent} portAnz={port}/>
      <hr></hr>
      <h1>Checkliste</h1>
      <Einkaufsliste category="Einkaufsliste" zutaten={zutaten}></Einkaufsliste>
      <button onClick={print}>Print</button>
    </div>
  );
}

export default App;
