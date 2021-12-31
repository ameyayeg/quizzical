import React from "react"
import './App.css'
import Welcome from "./Welcome"
import Questions from "./Questions"
import { nanoid } from "nanoid"

export default function App() {

    const [showQuiz, setShowQuiz] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [buttonProps, setButtonProps] = React.useState({
        value: "",
        isClicked: false,
    })

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=22&type=multiple")
             .then(res => res.json())
             .then(data => {
                 setQuestions(data.results.map(result => {
                     return {
                        question: result.question,
                        correct: {
                            response: result.correct_answer,
                            id: nanoid()
                        },
                        wrong: result.incorrect_answers.map(answer => ({answer, id: nanoid()}))
                     }
                 }))
             })
     }, [0])

    function handleClick() {
        setShowQuiz(prevVal => !prevVal)
    }

    return(
        <div>
            {!showQuiz && <Welcome handleClick={handleClick}/>}
            {showQuiz && <Questions questions={questions} setQuestions={setQuestions} buttonProps={buttonProps} setButtonProps={setButtonProps}/>}
        </div>
    )
}