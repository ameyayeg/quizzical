import React from "react"
import './App.css'
import Welcome from "./Welcome"
import Questions from "./Questions"

export default function App() {

    const [showQuiz, setShowQuiz] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [selectedButton, setSelectedButton] = React.useState(false)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=22&type=multiple")
             .then(res => res.json())
             .then(data => {
                 setQuestions(data.results)
             })
     }, [0])

    function handleClick() {
        setShowQuiz(prevVal => !prevVal)
    }

    // function chooseButton(id) {
    //     setSelectedButton(prevVal => !prevVal)
    // }

    return(
        <div>
            {!showQuiz && <Welcome handleClick={handleClick}/>}
            {showQuiz && <Questions questions={questions} setQuestions={setQuestions} />}
        </div>
    )
}