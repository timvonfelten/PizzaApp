import { useState } from "react";


const Portionen = (props) => {

    // State für Portionen setzen und inital Wert setzen
    const [port, setPort] = useState(10);

    const handleChange = event => {
        setPort(event.target.value);
    };

    const returnPort = ()=> {
        const data = port;
        // Daten an Parent zurückgebgen für ProgressBar
        props.childToParent(data)
    };


    return (
        <div>
            <form>
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Anzahl Portionen:</span>
                    <input type="number" value={port} onChange={handleChange}/>
                </label>
                <button  type="button" onClick={returnPort}>Speichern</button>
            </form>
        </div>
    );
        
}
export default Portionen