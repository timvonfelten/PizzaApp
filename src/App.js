import logo from './logo.svg';
import Portionen from './components/Portionen';
import { useState } from 'react';
import Zutaten from './components/Zutaten';

function App() {

  // Daten aus Child Komponent an Partner Komponent übergeben Portionen > App.js
  const [data, setData] = useState('');

  // Portionen changer einblenden
  const [view, setView] = useState(true);
  const childToParent = (childdata) => {
    setData(childdata);
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
      Anzahl Portionen: {data} <br></br>
      <Zutaten portAnz={2}/>
    </div>
  );
}

export default App;
