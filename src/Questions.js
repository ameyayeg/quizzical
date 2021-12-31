import React, { useState } from "react";
export default function Questions(props) {
  const [isClicked, setIsClicked] = useState(false);

  const styles = {
    /* backgroundColor: "beige", */
    backgroundColor: "beige",
    marginRight: "5px",
    borderRadius: "5px",
    padding: "1rem",
    cursor: "pointer",
  };


  const onClickHandler = (event) => {
     const incorrectAnswers=props.questions.map((element)=>{
         return element.wrong.map((answer)=> answer.answer)
     })
     console.log(incorrectAnswers[0])
     console.log(incorrectAnswers[0].includes(event.target.outerText))
     console.log(event.target.outerText)
     if(incorrectAnswers[0].includes(event.target.outerText)){
         event.target.style.backgroundColor='rgb(255, 0, 0)';
     }
  };
  /* @ameyayeg I created this onClickhandler function that will turn any answer in the first question red, if it is part of the incorrect answers array. 
    This might be a good place to start, although this function will need to be expanded to work on all questions as well as how to handle correct answers
  */
  const jumbleAnswers = props.questions.map((element) => {
    const correctAnswer = element.correct.response;
    const incorrectAnswers = element.wrong.map((answer) => answer.answer);
    const allAnswers = incorrectAnswers.concat(correctAnswer);
    const mixedAnswers = allAnswers.sort(() => Math.random() - 0.5);
    const answerButtons = mixedAnswers.map((answer) => (
      <button onClick={onClickHandler} style={styles}>
        {answer}
      </button>
    ));

    return (
      <div>
        <div>{element.question}</div>
        {answerButtons}
        <hr></hr>
      </div>
    );
  });

  return (
    <main>
      {jumbleAnswers}
      <button>Check</button>
    </main>
  );
}
