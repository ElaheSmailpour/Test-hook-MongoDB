
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from "react"


const Ergebnis = () => {
    const [punktZahl, setpunktZahl] = useState(null)
    const [bestanden, setBestanden] = useState(false)
    useEffect(() => {
        if (punktZahl === null) {
            let speicher = localStorage.getItem("punkte")
            if (speicher >= 17) {
                setBestanden(true)
            }
            setpunktZahl(speicher)
        }

    }, [punktZahl])

   
    const züruk=useHistory()

    const Testwiederholen = () => {
        züruk.push("/Test")
    }
    return (
        <div className="body-Ergebnis">
          

            <div className="ergebnisContent">
            {bestanden ?
                
                <h1 className="begrüßung">Herzlichen Glückwünsch!</h1>
                : 
                <h1 className="begrüßung">Es tut mir Leid!</h1>
                }
                
            <p className="ergebnisErklärung">Sie haben die prüfung {!bestanden ? "nicht" : ""}  bestanden  und Sie haben {punktZahl} fragen  von 33 richtig beantwortet.</p>

            {bestanden ?
                <h2 className="bestandenOderNicht">Bestanden</h2>
                : <h2 className="bestandenOderNicht">Nicht Bestanden</h2>}

            <div id="punktZahlContainer">
            <p className="punktZahl"> Ihre Punkte ist :{punktZahl}</p>
            </div>

            

            </div>
           
            <div id="containerErgebnisButton">
            <button className="buttonstyle" onClick={Testwiederholen}>Test wiederholen</button>
           
            </div>

        </div>

    )
}

export default Ergebnis