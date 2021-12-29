import React from "react"

export default function Questions(props) {


    React.useEffect(() => {
       fetch("https://opentdb.com/api.php?amount=5&category=22&type=multiple")
            .then(res => res.json())
            .then(data => {
                props.setQuestions(data.results)
            })
    }, [0])


const questionElements = props.questions.map(category => <div>{category.question}</div>)

    return (
        <main>
            {questionElements}
        </main>
    )
}