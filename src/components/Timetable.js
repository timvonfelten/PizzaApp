import Steps from "./Steps"
import { useState } from "react";

const Timetable = (props) => {

    const [viewIndex, setViewIndex] = useState(0);
    const changeViewIndex = (index) => {
        var newViewIndex = viewIndex;
        if (index == 0) {
            newViewIndex -= 1;
        }
        if (index == 1) {
            newViewIndex += 1;
        }
        if (newViewIndex <= 0){
            newViewIndex = 0
        }
        if (newViewIndex > 7){
            newViewIndex = 7
        }
        setViewIndex(newViewIndex);
        console.log("viewIndex:",newViewIndex)
      }

    const subHours = (hours, date = new Date()) => {
        const newDate = new Date(date.getTime() - hours * 60 * 60 * 1000)
        var newMinutes = newDate.getMinutes()
        if (newMinutes === 0){
            newMinutes = "00"        }
        const newHours = newDate.getHours()
        const timeFormated = newHours + ":" + newMinutes
        return timeFormated;
    }


    const finishTime = props.time

    const steps = [
        {
          key: 1,
          time_start: subHours(26, finishTime),
          time_end: subHours(20, finishTime),
          title: "Am Vortag: Vorteig vorbereiten",
          ingredient_step: Math.round(props.ingredients.mehl * 0.1935) + " g Mehl | " + Math.round(props.ingredients.wasser * 0.3) + " ml Wasser | " + props.ingredients.honig + " g Honig | " + props.ingredients.hefe + " g Hefe",
          text: "18 - 24h vor dem Haupteig muss der Vorteig vorbereitet werden. Dieser nennt sich Poolish und besteht je zur Hälfte aus Mehl und Wasser. Dazu kommt ein wenig Hefe und Honig um die fermentation zu aktivieren. Teig in einer geschlossenen Schüssel, 1h bei Raumtemperatur lagern und anschliessend in den Kühlschrank legen. Die Schüssel sollte das 3-fache Volumen des Teiges haben. Wichtig: Falls Frischhefe verwendet wird muss die dreifache Menge an Hefe verwendet werden: " + props.ingredients.hefe * 3 +" g Frischhefe",
          done: false,
        },
        {  
            key: 2,
            time_start: subHours(3.5, finishTime),
            time_end:subHours(3, finishTime),
            title: "Hauptteig vorbereiten",
            ingredient_step: props.ingredients.mehl + " g Mehl | " + props.ingredients.salz + " g Salz | "+ Math.round(props.ingredients.wasser * 0.7) + " ml Wasser",
            text: "Der Poolish wird nun im Wasser aufgelöst, danach wird "+ Math.round(props.ingredients.mehl * 0.805) + " g Mehl hinzugegeben.",
            done: false,
        },
        {
            key: 3,
            time_start: subHours(3, finishTime),
            time_end:subHours(2.5, finishTime),
            title: "Teig aufgehen lassen",
            ingredient_step:"",
            text: "Den Teig nun 30 Minuten zugedeckt in ein mit Olivenöl geölten Schüssel aufgehen lassen.",
            done: false,
        },
        {
            key: 4,
            time_start: subHours(2.5, finishTime),
            time_end:subHours(2.25, finishTime),
            title: "Teig in Portionen aufteilen",
            ingredient_step:"",
            text: "Den Teig nun in " + props.portions + " gleichmässige Portionen aufgeteilt und mit genügend Abstand auf geölte Bleche verteilt.",
            done: false,
        },
        {
            key: 5,
            time_start: subHours(2.25, finishTime),
            time_end:subHours(0.75, finishTime),
            title: "Teigportionen aufgehen lassen",
            ingredient_step:"",
            text: "Die Teigportionen nun 2 Stunden zugedeckt bei Zimmertemperatur ca. 20 C° aufgehen lassen, bis die Portionen etwa die doppelte Grösse erreicht haben.",
            done: false,
        },
        {
            key: 6,
            time_start: subHours(0.75, finishTime),
            time_end:subHours(0.25, finishTime),
            title: "Zutaten vorbereiten",
            ingredient_step:"",
            text: "Die Zutaten für die Pizza vorbereiten: Tomatensauce mit Basilikum und Salz anrühren, Parmesan reiben, Tomaten schneiden, weitere Zutaten schneiden.",
            done: false,
        },
        {
            key: 7,
            time_start: subHours(0.25, finishTime),
            time_end:subHours(0, finishTime),
            title: "Pizza backen",
            ingredient_step:"",
            text: "Pizzateig erst kurz vor Backen vom Blech nehmen. Mit Fingern die Luft von der Mitte her an den Rand drücken. Tomatensauce auf der Pizza verteilen. Nun die Pizza auf dem Pizzastein vorbacken bis der Rand leich bräunlich wird. Nun die Pizza aus dem ofen nehmen. Parmesan auf Pizzaboden verteilen. Tomaten verteilen und mit Mozarella belegen. Pizzarand mit Olivenöl einstreichen und fertig backen, bis der Mozarella verlaufen ist und die ersten Blasen entstehen.",
            done: false,
        },
        {
            key: 8,
            time_start: subHours(0, finishTime),
            time_end:subHours(-2, finishTime),
            title: "Buon Appetito",
            ingredient_step:"",
            text: "Die Pizza solte nun «soft and crunchy at the same time» sein.",
            done: false,
        },
      ];

    return (
        <div>
            <div className="w-full m-auto text-center mb-4">
            {steps.map((item, index) =>(
                <div  key={item.id} className={viewIndex === index ? "w-10 h-10 rounded-full bg-gold inline-block mr-2 ml-2 mb-2 text-center pt-2" : "w-10 h-10 rounded-full bg-light inline-block mr-2 ml-2 mb-2 text-center pt-2"}>{index+1}</div>
            ))}
            </div>

            <div className="m-0 pb-0">
                {steps.map((item, index) => {
                    return (
                    <Steps key={item.id} viewIndex={viewIndex} index={index} time_start={item.time_start} time_end={item.time_end} title={item.title} text={item.text} ingredient={item.ingredient_step}></Steps>
                    );
                })}
                
            </div>
            <div className="h-15 fixed bottom-28 w-full flex justify-center -m-10 -p-20 bg-white">
            <div className='h-30 bg-red w-full flex justify-center mb-4 mt-4'>
                    <button index='0' className={viewIndex === 0 ? 'bg-light text-grey p-4 mr-2 ml-2 tracking-wider cursor-not-allowed' : 'bg-light text-black p-4 mr-2 ml-2 tracking-wider'} onClick={() => changeViewIndex(0)}>zurück</button>
                    <button index='1' className={viewIndex === 7 ? 'bg-light text-grey p-4 mr-2 ml-2 tracking-wider cursor-not-allowed' : 'bg-light text-black p-4 mr-2 ml-2 tracking-wider'} onClick={() => changeViewIndex(1)}>weiter</button>
            </div>
            </div>
    </div>
    )
}
export default Timetable
