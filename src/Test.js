

//elternteil 



import Fragen from "./Fragen";
import { useState } from "react";




const Test = () => {

    const [data, setData] = useState([]);

    const [questionIndex, setQuestionIndex] = useState(0)
    const [testläuft, setTestläuft] = useState(false)
  




    const teststarten = () => {

        setTestläuft(true)
        const land = document.querySelector("#stats").value;

        Promise.all([
            fetch(process.env.REACT_APP_BACKENDURL + "RandomQuestion").then(res => res.json()),
            fetch(process.env.REACT_APP_BACKENDURL + `RandomQuestion/${land}`).then(res => res.json())

        ]).then(([urlOneData, urlTwoData]) => {
            console.log("urlOneData=", urlOneData)
            console.log("urlTwoData=", urlTwoData)
            console.log("mergedData=", [...urlOneData, ...urlTwoData])
            setData([...urlOneData, ...urlTwoData]);

            
                })

    }


    const VorherigeAufgabe = () => {

        if (questionIndex !== 0)
            setQuestionIndex(questionIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (questionIndex < data.length - 1)
            setQuestionIndex(questionIndex + 1)


    }
   

   

    return (


        <div className="body-testSeite">


            {!testläuft ?

                <div className="bundesländer">
                    <label id="bundesländerselect">Bundesländer auswählen : </label>
                    <select id="stats" name="stats">

                        <option value="Baden-Württemberg">Baden-Württemberg </option>
                        <option value="Bayern">Bayern </option>
                        <option value="Berlin">Berlin</option>
                        <option value="Brandenburg">Brandenburg </option>
                        <option value="Bremen">Bremen</option>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Hessen">Hessen</option>
                        <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                        <option value="Niedersachsen">Niedersachsen</option>
                        <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                        <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                        <option value="Saarland">Saarland</option>
                        <option value="Sachsen">Sachsen</option>
                        <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                        <option value="Schleswig-Holstein">Schleswig-Holstein </option>
                        <option value="Thüringen">Thüringen</option>

                    </select>
                </div>

                : ""}


            <div className="teststarten">
                {!testläuft ?

                    <button id="teststarten" onClick={teststarten}>Test starten</button>

                    : ""}

                <div className="container-testSeite">

                    {data.length > 0 && <Fragen propsQuestion={data[questionIndex]}

                        propsQuestionLänge={data.length}
                        propsQuestionIndex={questionIndex}
                      
                    >

                    </Fragen>}
                    {testläuft ?

                        <div className="testläuft">
                            <div className="containerButton">
                                <button className="nextAndLastButton" onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                               
                                <button className="nextAndLastButton" onClick={NächsteAufgabe}>Nächste Aufgabe</button>
                            </div>


                        </div>



                        : " "}


                </div>


            </div>




        </div>




    )

}

export default Test;



