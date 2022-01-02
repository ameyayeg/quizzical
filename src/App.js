import React from "react"
import './App.css'
import Question from "./Question"
import { nanoid } from "nanoid"

export default function App() {

    const [menu, setMenu] = React.useState(true)
    const [questions, setQuestions] = React.useState([])
    
    function handleClick() {
        setMenu(prevVal => !prevVal)
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=22&type=multiple")
             .then(res => res.json())
             .then(data => {
                 setQuestions(getNewQuestions(data.results))
             })
     }, [0])

   function getNewQuestions(listOfQuestions) {

       const resetQuestions = listOfQuestions.map(question => {
           return ({
               id: nanoid(),
               question: question.question,
               correctAnswer: question.correct_answer,
               answers: settingAnswers(shuffleAnswers([...question.incorrect_answers, question.correct_answer]), question.correct_answer)
           })
       })
       return resetQuestions
   }

   function settingAnswers(listOfAnswers, correctAnswer) {
   
    return listOfAnswers.map(answer => {
        return ({
            isHeld: false,
            isCorrect: answer === correctAnswer ? true : false,
            answer: answer,
            id: nanoid(),
            isHeldAndCorrect: false,
            isHeldAndIncorrect: false,
        })
        
    })
   }

   function shuffleAnswers(answerList) {   
        return answerList.sort(() => Math.random() - 0.5)
   }

   const questionEls = questions.map(question => {

       return (

            <Question
            id={question.id}
            key={question.id}
            question={question.question}
            answers={question.answers}
            runHold={runHold} 
            />
       )
   })

   function runHold(answerId, questionId) {
       setQuestions(prevQuestions => prevQuestions.map(question => {
           if(question.id === questionId) {
               const answersList = question.answers.map(answer => {
                   if(answer.id === answerId || answer.isHeld) {
                       return ({
                           ...answer,
                           isHeld: !answer.isHeld
                       })
                   } else {
                       return answer
                   }
               })
               return ({
                   ...question,
                   answers: answersList
               })
           } else {
               return question
           }
       }))
   }

    return(
        menu 
        ?
        <menu className="container">
            <img className="blob-5" src="blob 5.png" alt="decorative-blob"/>
            <h1 className="container--title">Quizzical</h1>
            <p className="container--description">Fancy practising your geography trivia?</p>
            <button className="container--button" onClick={handleClick}>Start quiz</button>
            <img className="blob-6" src="blob 6.png" alt="decorative-blob"/>
        </menu>
        :
        <main>
            {questionEls}
        </main>
    )
}