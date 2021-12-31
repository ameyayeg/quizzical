import React from "react"

export default function Questions(props) {

    const styles = {
        backgroundColor: "beige",
        marginRight: "5px",
        borderRadius: "5px",
        padding: "1rem",
        cursor: "pointer"
    }


    const jumbleAnswers = props.questions.map(element => {
        const correctAnswer = element.correct.response
        const incorrectAnswers = element.wrong.map(answer => answer.answer)
        const allAnswers = incorrectAnswers.concat(correctAnswer)
        const mixedAnswers = allAnswers.sort(() => Math.random() - 0.5)

        const answerButtons = mixedAnswers.map(answer => <button style={styles}>{answer}</button>)

        return <div>
                    <div>{element.question}</div>
                    {answerButtons}
                    <hr></hr>
            </div>
    })

    return (
        <main>
            {jumbleAnswers}
            <button>Check</button>
        </main>
    )
}