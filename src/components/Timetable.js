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
          time_start: subHours(26, finishTime),
          time_end: subHours(20, finishTime),
          title: "Am Vortag: Vorteig vorbereiten",
          ingredient_step: props.ingredients.mehl + " g Mehl | " + props.ingredients.wasser + " ml Wasser | " + props.ingredients.honig + " g Honig | " + props.ingredients.hefe + " g Hefe",
          text: "18 - 24h vor dem Haupteig muss der Vorteig vorbereittet werden. Dieser nennt sich Poolish und bestehtt je zur Hälfte aus Mehl und Wasser. Dazu kommt wenig Hefe und Honig um die fermentation anzuregen.",
          done: false,
        },
        {  time_start: subHours(3.5, finishTime),
            time_end:subHours(3, finishTime),
            title: "Hauptteig vorbereiten",
            ingredient_step: props.ingredients.mehl + " g Mehl | " + props.ingredients.honig + " g Honig",
            text: "Der Poolish wird nun im Wasser aufgelöst, danach wird"+ props.ingredients.mehl * 0.8655 + "g Mehl hinzugegeben.",
            done: false,
        },
        {
            time_start: subHours(3, finishTime),
            time_end:subHours(2.5, finishTime),
            title: "Teig aufgehen lassen",
            ingredient_step:"",
            text: "Der Teig wird nun 30 min. aufgehen.",
            done: false,
        },
        {
            time_start: subHours(2.5, finishTime),
            time_end:subHours(2.25, finishTime),
            title: "Teig in Portionen aufteilen",
            ingredient_step:"",
            text: "Der Teig wird nun in" + props.portions + "gleichmässige Portionen aufgeteilt.",
            done: false,
        },
        {
            time_start: subHours(2.25, finishTime),
            time_end:subHours(0.75, finishTime),
            title: "Teigportionen aufgehen lassen",
            ingredient_step:"",
            text: "Der Teig nun 2 h aufgehen lassen, bis die Portionen etwas die doppelte Grösse erreicht haben. (Zu hohe Temperaturen vermeiden.)",
            done: false,
        },
        {
            time_start: subHours(0.75, finishTime),
            time_end:subHours(0.25, finishTime),
            title: "Zutaten vorbereiten",
            ingredient_step:"",
            text: "Die Zutaten für die Pizza vorbereiten: Tomatensauce mit Basilikum und Salz anrühren, Parmesan reiben, Tomaten schneiden, Ruccola waschen.",
            done: false,
        },
        {
            time_start: subHours(0.25, finishTime),
            time_end:subHours(0, finishTime),
            title: "Pizza backen",
            ingredient_step:"",
            text: "Pizzateig erst kurz vor Backen vom Blech nehmen. Mit Fingern die Luft von der Mitte her an den Rand drücken. Tomatensauce auf der Pizza verteilen. Nun die Pizza auf dem Pizzastein vorbacken bis der Rand leich bränlich wird. Nun Pizza aus dem ofen nehmen. Parmesan auf Pizzaboden verteilen. Tomaten verteilen und mit Mozarella belegen. Pizzarand mit Olivenöl einstreichen und fertig backen, bis der Mozarella verlaufen ist und die ersten Blasen entstehen.",
            done: false,
        },
        {
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
            <div className="w-full h-10 m-auto text-center mb-10">
            {steps.map((item, index) =>(
                <div  key={item.id} className={viewIndex === index ? "w-10 h-10 rounded-full bg-gold inline-block mr-2 ml-2 text-center pt-2" : "w-10 h-10 rounded-full bg-light inline-block mr-2 ml-2 text-center pt-2"}>{index+1}</div>
            ))}
            </div>

            <div className="m-0 pb-0">
                {steps.map((item, index) => {
                    return (
                    <Steps viewIndex={viewIndex} index={index} time_start={item.time_start} time_end={item.time_end} title={item.title} text={item.text} ingredient={item.ingredient_step}></Steps>
                    );
                })}
                
            </div>
            <div className="h-15 fixed bottom-32 w-full flex justify-center -m-10 -p-20">
            <div className='h-30 bg-red w-full flex justify-center mb-4 mt-4'>
                    <button index='0' className='bg-light text-black p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex(0)}>zurück</button>
                    <button index='1' className='bg-light text-black p-4 mr-2 ml-2 tracking-wider' onClick={() => changeViewIndex(1)}>weiter</button>
            </div>
            </div>
    </div>
    )
}
export default Timetable
