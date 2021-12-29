import React from "react"

export default function Questions(props) {

const buttonStyles = {
    backgroundColor: "beige",
    marginRight: "5px",
    borderRadius: "5px",
    padding: "1rem",
    cursor: "pointer"
}

function changeColor(e) {
    e.target.style.backgroundColor = "green"
}

const questionElements = props.questions.map(element => {

    // Gathering correct and incorrect answers
    const correctAnswer = element.correct_answer
    const incorrectAnswers = element.incorrect_answers

    // Joining correct and incorrect answers
    const allAnswers = incorrectAnswers.concat(correctAnswer)

    // Shuffling answers
    const mixedAnswers = allAnswers.sort(() => Math.random() - 0.5)

    // Creating answer button elements
    const answerButtonEl = mixedAnswers.map(answer => <button style={buttonStyles} onClick={changeColor}>{answer}</button>)

    return <div>
            <div>{element.question}</div>
            {answerButtonEl}
            <hr></hr>
        </div>
})

    return (
        <main>
            {questionElements}
        </main>
    )
}