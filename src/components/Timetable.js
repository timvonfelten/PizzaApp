import Steps from "./Steps"
const Timetable = (props) => {

    const subHours = (hours, date = new Date()) => {
        const newDate = new Date(date.getTime() - hours * 60 * 60 * 1000)
        const newMinutes = newDate.getMinutes()
        const newHours = newDate.getHours()
        const timeFormated = newHours + ":" + newMinutes
        console.log(timeFormated)
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

    const test = "Platzhalter"
    const done = false

    const steps = [
        {
          time_start: subHours(24, finishTime),
          time_end: subHours(3.5, finishTime),
          title: "Vorteig vorbereiten",
          text: "Rezepttext",
          done: false,
        },
        {
            time_start: subHours(3.5, finishTime),
            time_end:subHours(3, finishTime),
            title: "Teig aufgehen lassen",
            text: "Der Teig wird nun 30 min. aufgehen.",
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
            title: "Teig aufgehen lassen",
            text: "Der Teig wird nun 30 min. aufgehen.",
            done: false,
        },
        {
            time_start: subHours(2.25, finishTime),
            time_end:subHours(0.75, finishTime),
            title: "Teig aufgehen lassen",
            text: "Der Teig wird nun 30 min. aufgehen.",
            done: false,
        },
        {
            time_start: subHours(0.75, finishTime),
            time_end:subHours(0.25, finishTime),
            title: "Teig aufgehen lassen",
            text: "Der Teig wird nun 30 min. aufgehen.",
            done: false,
        },
        {
            time_start: subHours(0.25, finishTime),
            time_end:subHours(0, finishTime),
            title: "Teig aufgehen lassen",
            text: "Der Teig wird nun 30 min. aufgehen.",
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
        <p>Vorteig: {vorteig}</p>
        <p>Teig vorbereiten: {teig_vorbereiten} – {teig_ganz_aufgehen}</p>
        <p>Teig aufgehen lassen: {teig_ganz_aufgehen} – {teig_auftetilen}</p>
        <p>Teig aufteilen: {teig_auftetilen} – {teig_2h_ruhen}</p>
        <p>Teig ruhen lassen: {teig_2h_ruhen} – {zutaten_vorbereitetn}</p>
        <p>Zutaten vorbereiten: {zutaten_vorbereitetn} – {pizza_backen}</p>
        <p>Pizza backen: {pizza_backen} – {pizza_fertig}</p>
        <p>Pizza fertig: {pizza_fertig}</p>
        
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