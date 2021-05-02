import { useState } from "react";
const Überus = () => {
    const [showinfo,setShowinfo] = useState(false)

    const info = () => {
        setShowinfo(!showinfo)
    }

    return (
        <div className="Überus">
            
          <button onClick={info}>Überus</button>
          {showinfo ?
          <p>Bei der Prüfung bekommen Sie ein Testheft mit 33 Fragen. Sie haben 60 Minuten Zeit, die Fragen zu beantworten. Bei jeder Frage müssen Sie aus vier möglichen Antworten die richtige Antwort auswählen. Wenn Sie mindestens 17 Fragen richtig beantworten, haben Sie den Test bestanden!</p>
          : ""}
        </div>
    )
}
export default Überus
