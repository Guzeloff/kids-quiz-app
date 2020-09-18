import React from 'react'
import './SingleQuestion.css'

export default function SingleQuestion({question}) {
    return (
        <div className="question">
            <img src={question} alt="" />
        </div>
    )
}
