import React from "react"
import './App.css'
import Welcome from "./Welcome"
import Questions from "./Questions"

export default function App() {

    const [showQuiz, setShowQuiz] = React.useState(false)
    const [questions, setQuestions] = React.useState([])

    function handleClick() {
        setShowQuiz(prevVal => !prevVal)
    }

    return(
        <div>
            {!showQuiz && <Welcome handleClick={handleClick}/>}
            {showQuiz && <Questions questions={questions} setQuestions={setQuestions} />}
        </div>
    )
}