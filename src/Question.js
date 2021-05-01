import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
const Question = ({ propsQuestionLänge, propsQuestion, propsQuestionIndex }) => {

    const [showAnswer, setshowAnswer] = useState({ optionSelected: undefined })

    useEffect(() => {
        setshowAnswer({ optionSelected: undefined })
    }, [])

    const answerbutton = (option) => {
setshowAnswer({optionSelected:option})
    }
    return (
        <div className="Question">
            <h1>Test  {propsQuestionIndex + 1} / {propsQuestionLänge} </h1>
            <p>{propsQuestion.question}</p>
            {propsQuestion.image &&
                <img src={"http://localhost:5000/images/" + propsQuestion.image} alt="ein Bild" />

            }
            <div className="answer">
                <ul>
                    {propsQuestion.answer.map((answerItem, answerIndex) =>
                        <li key={answerIndex}>
                            <button onClick={()=>answerbutton(answerItem)}>
                                {answerItem}
                            </button>
                            {showAnswer.optionSelected ===answerItem && propsQuestion.correct===answerIndex  && <span className="text-success">{"Richtige Antwort"}</span> }
                            {showAnswer.optionSelected===answerItem  && propsQuestion.correct!==answerIndex && <span className="text-danger">{"Falsche Antwort"}</span>}
                        </li>
                    )}
                </ul>
               
            </div>
        </div>
    )
}

export default Question