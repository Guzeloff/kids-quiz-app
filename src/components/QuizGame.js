import React, { Component } from 'react'
import SingleQuestion from './SingleQuestion'
import Answers from './Answers';

import _ from 'lodash';

import './QuizGame.css'
import Header from './Header';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import moment from "moment"
import tazno from '../components/assets/feelings/тажно.png'
import srekno from '../components/assets/feelings/среќно.png'
import pospano from '../components/assets/feelings/поспано.png'
import povredeno from '../components/assets/feelings/повредено.png'
import nervozno from '../components/assets/feelings/нервозно.png'
import isplaseno from '../components/assets/feelings/исплашено.png'
import iznenadeno from '../components/assets/feelings/изненадено.png'
import zasrameno from '../components/assets/feelings/засрамено.png'
import gladno from '../components/assets/feelings/гладно.png'
import vozbudeno from '../components/assets/feelings/возбудено.png'
import QuizResults from './QuizResults';
import Moment from 'react-moment';

export class QuizGame extends Component {
    constructor(props){
        super(props);

        this.state={
            questions : {
                1: tazno,
                2: srekno,
                3: pospano,
                4:povredeno,
                5:nervozno,
                6:isplaseno,
                7:iznenadeno,
                8:zasrameno,
                9:gladno,
                10:vozbudeno
            },
            answers : {
                1: {
                    1 : 'среќно',
                    2 : 'тажно',
                    3 : 'возбудено',
                    4 : 'исплашено'
                },
                2: {
                    1 : 'среќно',
                    2 : 'тажно',
                    3 : 'гладно',
                    4 : 'засрамено'
                },
                3: {
                    1 : 'исплашено',
                    2 : 'тажно',
                    3 : 'изненадено',
                    4 : 'поспано'
                },
                4: {
                    1 : 'исплашено',
                    2 : 'тажно',
                    3 : 'повредено',
                    4 : 'поспано'
                },
                5: {
                    1 : 'нервозно',
                    2 : 'тажно',
                    3 : 'засрамено',
                    4 : 'гладно'
                },
                6: {
                    1 : 'исплашено',
                    2 : 'тажно',
                    3 : 'засрамено',
                    4 : 'гладно'
                },
                7: {
                    1 : 'исплашено',
                    2 : 'тажно',
                    3 : 'изненадено',
                    4 : 'поспано'
                },
                8: {
                    1 : 'исплашено',
                    2 : 'засрамено',
                    3 : 'тажно',
                    4 : 'среќно'
                },
                9: {
                    1 : 'гладно',
                    2 : 'засрамено',
                    3 : 'тажно',
                    4 : 'среќно'
                },
                10: {
                    1 : 'гладно',
                    2 : 'среќно',
                    3 : 'тажно',
                    4 : 'возбудено'
                },
                
                
            },
            correctAnswers : {
                1 : '2',
                2 : '1',
                3 : '4',
                4 : '3',
                5 : '1',
                6 : '1',
                7 : '3',
                8 : '2',
                9 : '1',
                10: '4'
            },
            correctAnswer : 0,
            clickedAnswer : 0,
            step : 1, //question number
            score : 0,
            questionPack : 0,
            timer : 0,
            startTimer : moment()
        }
    }

    componentDidMount () {
        


    }
    
   

    checkAnswer= answer =>{



        const {correctAnswers , step ,score,questionPack} = this.state;

        if(answer === correctAnswers[step]) {

            this.setState({
                score : score + 1 ,
                correctAnswer : correctAnswers[step], //snimeno correctanswer u promenliva za da moze posle da go manipulurame poleto kliknato
                clickedAnswer : answer // koe pole e kliknato
            })
            
        }
        else {
            this.setState({
                correctAnswer : 0,
                clickedAnswer : answer
            })
        }
        setTimeout(()=> {
            this.setState({
                step : step +1,
                correctAnswer : 0,
                clickedAnswer : 0
            });
        }, 1500);
    }


    render() {
        const  {questions,step,answers,correctAnswer,clickedAnswer,questionPack,score,timer,startTimer} =this.state
        return (
            
            <div className="content">
                <Header/>
                {step <= Object.keys(questions).length ?
                (<div className="question_card">

                    <h3>Како се чувствува детето на сликата ? </h3>
                    <SingleQuestion 
                    question={questions[step]}
                    />
                    <Answers
                     answers={answers[step]}
                     step={step}
                     checkAnswer = {this.checkAnswer}
                     correctAnswer = {correctAnswer}
                     clickedAnswer= {clickedAnswer}
     
                     />
                     {/* <div className="nextStep_details">
                        <button className="nextStep" disabled={clickedAnswer && Object.keys(questions).length >= step ? false : true}
                        onClick={() => this.nextStep(step)}
                        >   
                            <span>следно</span>
                            <NavigateNextIcon/>
                        </button> 
                     </div> */}
                     <p> <i>прашање {step}/{Object.keys(questions).length}</i></p>  
                               
                </div>
                ):
                    (
                        <QuizResults startTimer={startTimer} score={score} questions={questions}/>
                    )
                }
            </div>
        )
    }
}

export default QuizGame
