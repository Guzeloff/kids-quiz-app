import React from 'react'
import './Answers.css'
import applause from './assets/cheering.mp3'
import boo from './assets/boo.mp3'

export default function Answers({answers,step,checkAnswer,correctAnswer,clickedAnswer}) {

    let audio = new Audio(applause)
    let audio1 = new Audio(boo)

    const correct = () => {
        audio.play()
    }
    const wrong = () => {
        audio1.play()
    }
    let ans = Object.keys(answers).map((answer,index) =>(
        <li 
        className={
            correctAnswer === answer ? 
            'correct' :
            clickedAnswer === answer ?
            'incorrect' : ''
        }
         
        onClick={() => checkAnswer(answer)}
        key={answer}
        >
            {answers[answer]}
        </li>
    ))

    return (
        <div className="answers_container">
          <ul disabled={clickedAnswer ? true : false }className="answers">
              {ans}
          </ul>
          <div>
              {correctAnswer ? 
              correct() :
              clickedAnswer ? 
              wrong() : ''
              }
          </div>
         
        </div>
    )
}
