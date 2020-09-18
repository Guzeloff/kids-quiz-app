import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './QuizCard.css'
import cover from './assets/cover.png'
import button from './assets/png-button.png'
import { Link } from 'react-router-dom';

function QuizCard() {
    return (
        <div className="quiz__card">
             <img className="quiz__img" src={cover} alt=""/>
             <Link className="header__link" to="/quizgame">
             <img className="quiz__button" src={button} alt=""/>
             </Link>
             
        </div>
      
    )
}

export default QuizCard
