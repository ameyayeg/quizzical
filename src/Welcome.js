import React from "react"

export default function Welcome(props) {

    return (
        <main className="container">
            <img className="blob-5" src="blob 5.png" alt="decorative-blob"/>
            <h1 className="container--title">Quizzical</h1>
            <p className="container--description">Fancy practising your geography trivia?</p>
            <button className="container--button" onClick={props.handleClick}>Start quiz</button>
            <img className="blob-6" src="blob 6.png" alt="decorative-blob"/>
        </main>
    )
}