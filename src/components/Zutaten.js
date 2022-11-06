import { useState } from "react"

const Zutaten = (props) => {

    const initalState = {
        mehl: 1550,
        wasser: 1000,
        hefe: 10,
        honig: 5,
        salz: 40,
        mozarella: 4,
        tomatensauce: 500,
    }

    const [zutaten, setZutaten] = useState(initalState)

    const resetState = () => {
        console.log("initstate:",initalState)
        setZutaten(initalState)
        console.log("nachSet",Zutaten)
        console.log("reset")
    }

    console.log("Anz. Port aus props:",props.portAnz)
    
    const handlePortChange = () => {
        console.log(zutaten)
        resetState()
        console.log(zutaten)
        var newZutaten = zutaten
        console.log(newZutaten.mehl, "*", props.portAnz)
        newZutaten.mehl = newZutaten.mehl * props.portAnz
        console.log("new:", newZutaten.mehl)
        setZutaten(newZutaten)
    }

    return(
        <div>
            <h1 className="text-2xl mt-6">Zutaten</h1>
            <ul>
                <li>Mehl: {zutaten.mehl}</li>
                <li>Wasser: {zutaten.wasser}</li>
                <li>Hefe: {zutaten.hefe}</li>
            </ul>
            <button onClick={handlePortChange}>Zutaten update</button>
            <button onClick={resetState}>resett</button>
        </div>
    )



}

export default Zutaten