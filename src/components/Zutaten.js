import { useEffect, useState } from "react"

const Zutaten = (props) => {
    console.log(props.zutatenToParent)
    const initalState = {
        mehl: 1550,
        wasser: 1000,
        hefe: 10,
        honig: 5,
        salz: 40,
        mozarella: 40,
        tomatensauce: 500,
    }

    const [zutaten, setZutaten] = useState(initalState)

    const resetState = () => {
        setZutaten({...initalState})
    }

    const handlePortChange = () => {
        // Ursprüngliche Zutaten für neue Portionen berechnung
        const newZutaten = initalState
        // Berechnen der neuen Portiongrössen > noch mit for Schlaufe verbessern
        newZutaten.mehl = Math.round((newZutaten.mehl * props.portAnz * 0.1))
        newZutaten.wasser = Math.round((newZutaten.wasser * props.portAnz * 0.1))
        newZutaten.hefe = Math.round((newZutaten.hefe * props.portAnz * 0.1))
        newZutaten.honig = Math.round((newZutaten.honig * props.portAnz * 0.1))
        newZutaten.salz = Math.round((newZutaten.salz * props.portAnz * 0.1))
        newZutaten.mozarella = Math.round((newZutaten.mozarella * props.portAnz * 0.1))
        newZutaten.tomatensauce = Math.round((newZutaten.tomatensauce * props.portAnz * 0.1))
        console.log(newZutaten.mehl * props.portAnz)
        // ... damit neues Objekt erzeugt wird und neu gerendert wird.
        setZutaten({...newZutaten})
        console.log("Zuttaten new:", zutaten)
    }

    useEffect(() => {
        console.log("triggerd use Effect")
        handlePortChange()
        // evtl. nicht ganz gut muss später ausgeführt werden damit neue werte übergeben werden
        returnZutaten()
    },[props.portAnz]);


    const returnZutaten = () => {
        const data = zutaten;
        // Daten an Parent zurückgebgen für Einkaufliste
        console.log(props.zutatenToParent)
        props.zutatenToParent(data)
    };


    return(
        <div>
            <h1 className="text-2xl mt-6">Zutaten</h1>
            <ul className="m-4">
                <li>Mehl: {zutaten.mehl} g</li>
                <li>Wasser: {zutaten.wasser} ml</li>
                <li>Hefe: {zutaten.hefe} g</li>
                <li>Honig: {zutaten.honig} g</li>
                <li>Salz: {zutaten.salz} g</li>
                <li>Mozarella: {zutaten.mozarella} g</li>
                <li>Tomatensauce: {zutaten.tomatensauce} g</li>
            </ul>
            <button onClick={handlePortChange}>Zutaten update</button>
            <button onClick={resetState}>reset</button>
            <button onClick={returnZutaten}>Zutaten an App.js übermitteln</button>
        
        </div>
    )
}

export default Zutaten