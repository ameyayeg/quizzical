import React from "react";

export default function Answer(props) {
    let answerStyle = {}
  
        answerStyle = {
            backgroundColor : props.isHeld ?  "#D6DBF5" : "white"
        }
    

    return (
        <div className="answer" style={answerStyle} onClick={props.runHold}>
            {props.answer}
        </div>
       
    )
}

