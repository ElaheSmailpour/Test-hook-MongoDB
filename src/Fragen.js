import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const Fragen = ({ propsQuestion, propsQuestionLänge, propsQuestionIndex,antwortHandler }) => {
    const [showAnswer, setshowAnswer] = useState({

        optionSelected: undefined
    })
    useEffect(() => {
        setshowAnswer({
           
            optionSelected: undefined
        })
    }, [])

    const AnwserButton = (option) => {

        setshowAnswer({
           
            optionSelected: option
        })

    }

    return (
        <div className="FragenAngaben">

            <h1 className={"FragenAngabenText"}>Test:{propsQuestionIndex + 1} / {propsQuestionLänge}</h1>
            <p className={"FragenAngabenText"}>{propsQuestion.question}</p>
            {propsQuestion.image &&
                <img src={"http://localhost:5000/images/" + propsQuestion.image} alt="ein Bild" />

            }
            <ul>
                {propsQuestion.answer.map((answerItem, answerIndex) =>

                    <li>
                        <button onClick={() => { AnwserButton(answerItem)
                          if(propsQuestion.correct === answerIndex ){
                            antwortHandler(true,propsQuestionIndex)
                        }
                        else {
                            antwortHandler(false,propsQuestionIndex) 
                        }
                         } }>
                            {answerItem}
                          
                        &nbsp; 
                      
                        {showAnswer.optionSelected === answerItem ? <i class="fas fa-check"></i> : ""}
                        </button>
                      
                        
                        {propsQuestion.correct === answerIndex && showAnswer.optionSelected === answerItem && <span className="text-success">{"Richtige Antwort"}</span>}
                        {showAnswer.optionSelected === answerItem && propsQuestion.correct !== answerIndex && <span className="text-danger">{"Falsche Antwort"}</span>}
                    </li>
                )}
            </ul>


        </div>
    )
}

export default Fragen