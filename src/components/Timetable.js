import Steps from "./Steps"
const Timetable = (props) => {

    const subHours = (hours, date = new Date()) => {
        const newDate = new Date(date.getTime() - hours * 60 * 60 * 1000)
        var newMinutes = newDate.getMinutes()
        if (newMinutes === 0){
            newMinutes = "00"
        }
        const newHours = newDate.getHours()
        const timeFormated = newHours + ":" + newMinutes
        return timeFormated;
    }


    const convertInput = (input) => {
        const [dateValues, timeValues] = input.split("T")
        const [month, day, year] = dateValues.split("-")
        const [hours, minutes] = timeValues.split(":")
        const date = new Date(+year, +month - 1, +day, +hours, +minutes, "00");
        return date
    }


    const finishTime = convertInput(props.time)

    const vorteig = subHours(24, finishTime)
    const teig_vorbereiten = subHours(3.5, finishTime)
    const teig_ganz_aufgehen = subHours(3, finishTime)
    const teig_auftetilen = subHours(2.5, finishTime)
    const teig_2h_ruhen = subHours(2.25, finishTime)
    const zutaten_vorbereitetn = subHours(0.75, finishTime)
    const pizza_backen  = subHours(0.25, finishTime)
    const pizza_fertig = subHours(0, finishTime)

    const steps = [
        {
          time_start: subHours(24, finishTime),
          time_end: subHours(3.5, finishTime),
          title: "Vorteig vorbereiten",
          text: "18 – 24h vor dem Haupteig muss der Vorteig vorbereittet werden. Dieser nennt sich Poolish und bestehtt je zur Hälfte aus Mehl und Wasser. Dazu kommt wenig Hefe und Honig um die fermentation anzuregen.",
          done: false,
        },
        {
            time_start: subHours(3.5, finishTime),
            time_end:subHours(3, finishTime),
            title: "Hauptteig vorbereiten",
            text: "Der Poolish wird nun im Wasser aufgelöst, danach wird"+ props.ingredients.mehl * 0.8655 + "g Mehl hinzugegeben.",
            done: false,
        },
        {
            time_start: subHours(3, finishTime),
            time_end:subHours(2.5, finishTime),
            title: "Teig aufgehen lassen",
            text: "Der Teig wird nun 30 min. aufgehen.",
            done: false,
        },
        {
            time_start: subHours(2.5, finishTime),
            time_end:subHours(2.25, finishTime),
            title: "Teig in Portionen aufteilen",
            text: "Der Teig wird nun in" + props.portions + "gleichmässige Portionen aufgeteilt.",
            done: false,
        },
        {
            time_start: subHours(2.25, finishTime),
            time_end:subHours(0.75, finishTime),
            title: "Teigportionen aufgehen lassen",
            text: "Der Teig nun 2 h aufgehen lassen, bis die Portionen etwas die doppelte Grösse erreicht haben. (Zu hohe Temperaturen vermeiden.)",
            done: false,
        },
        {
            time_start: subHours(0.75, finishTime),
            time_end:subHours(0.25, finishTime),
            title: "Zutaten vorbereiten",
            text: "Die Zutaten für die Pizza vorbereiten: Tomatensauce mit Basilikum und Salz anrühren, Parmesan reiben, Tomaten schneiden, Ruccola waschen.",
            done: false,
        },
        {
            time_start: subHours(0.25, finishTime),
            time_end:subHours(0, finishTime),
            title: "Pizza backen",
            text: "Pizzateig erst kurz vor Backen vom Blech nehmen. Mit Fingern die Luft von der Mitte her an den Rand drücken. Tomatensauce auf der Pizza verteilen. Nun die Pizza auf dem Pizzastein vorbacken bis der Rand leich bränlich wird. Nun Pizza aus dem ofen nehmen. Parmesan auf Pizzaboden verteilen. Tomaten verteilen und mit Mozarella belegen. Pizzarand mit Olivenöl einstreichen und fertig backen, bis der Mozarella verlaufen ist und die ersten Blasen entstehen.",
            done: false,
        },
        {
            time_start: subHours(0, finishTime),
            time_end:subHours(-2, finishTime),
            title: "Buon Appetito",
            text: "Die Pizza solte nun «soft and crunchy at the same time» sein.",
            done: false,
        },
      ];

    return (
    <div>
        
        <div className="m-0 pb-0">
            {steps.map((item, index) => {
                return (
                <Steps time_start={item.time_start} time_end={item.time_end} title={item.title} text={item.text}
                    >
                </Steps>
                );
            })}
        </div>

        

    </div>

    

    )
}
export default Timetable