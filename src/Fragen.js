//kinderteil



import React, { useState, useEffect } from 'react';

const Fragen = ({ propsQuestion, propsQuestionLänge, propsQuestionIndex}) => {


    const [showAnswer, setshowAnswer] = useState({

        
        optionSelected: undefined
    })

   

    useEffect(() => {
        setshowAnswer({
           
            optionSelected: undefined

        })

    }, [])

    const anwserButton = (option) => {

        setshowAnswer({
           
            optionSelected: option
        })
        

    }

    return (
        <div className="FragenAngaben">
         
            <h1 className="Anzahlfrage">Aufgabe: {propsQuestionIndex + 1} / {propsQuestionLänge}</h1>
            <p className="FragenAngabenText">{propsQuestion.question}</p>
            {propsQuestion.image &&
               <div className="imageTestSeiteDiv"><img  src={process.env.REACT_APP_BACKENDURL  + "images/" + propsQuestion.image} alt="ein Bild" /></div> 
               
               

            }

            <ul>
                {propsQuestion.answer.map((answerItem, answerIndex) =>

                    <li key={answerIndex} id="liste">
                        <button id="antwortButton" onClick={() => {

                            anwserButton(answerItem);
                           
                        }}>{answerItem}
                         &nbsp; 
                           {showAnswer.optionSelected ===answerItem ? <i class="fas fa-check-circle"></i> : ""} 
                        </button> 

                       
                     
                  

                        { propsQuestion.correct === answerIndex && showAnswer.optionSelected === answerItem}
                        {showAnswer.optionSelected === answerItem && propsQuestion.correct !== answerIndex}

                    </li>
                )}
            </ul>
        </div>

    )
}

export default Fragen