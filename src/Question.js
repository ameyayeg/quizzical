import React from "react"
import "./App.css"
import Answer from "./Answer"

export default function Question(props) {

    function runHold(id) {
        props.runHold(id, props.id)
    }

    const answerEls = props.answers.map(answer => {
        
        return (
            <Answer
            answer={answer.answer}
            isHeld={answer.isHeld}
            runHold={() => runHold(answer.id)}
            questionId={props.id}
            key={answer.id}
            id={answer.id}
            isCorrect={answer.isCorrect}
            />
        )
    })

    

    return (
        <div className="container--question">
            <h2>{props.question}</h2>
            <div className="container-answer">
                {answerEls}
            </div>
            <hr/>
        </div>
    )
}