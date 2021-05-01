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
          <p>Wir sind WorldCode, eine Gruppe von Webentwicklern mit Sitz in Berlin und Düsseldorf. Unser Vorschlag ist, dass Sie sich komplett online auf den Einbürgerungstest vorbereiten.<br /> Wir wüschen Ihnen viel Erfolg und viel Spaß!</p>
          : ""}
        </div>
    )
}
export default Überus
