import React, { useEffect,useState } from 'react'

import moment from "moment"

import {auth,db} from '../firebase'
import { useSelector , useDispatch } from 'react-redux'
import Moment from 'react-moment'

import './QuizResults.css'

import { makeStyles } from '@material-ui/core/styles';
import './ParentsSingleResult.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimerIcon from '@material-ui/icons/Timer';
import {quizResults} from '../store/actions/mainAction'
import {Link,useHistory} from 'react-router-dom'
import tazno from '../components/assets/feelings/тажно.png'
import srekno from '../components/assets/feelings/среќно.png'
import pospano from '../components/assets/feelings/поспано.png'
import povredeno from '../components/assets/feelings/повредено.png'
import nervozno from '../components/assets/feelings/нервозно.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { SatelliteSharp } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    poeni: {
        color : '#1dd900',
        position : 'relative',
        paddingRight : '5px',
        top: '8px',
        left : '5px'
    },
    timer : {
        color : '#c9b204',
        position : 'relative',
        paddingRight : '8px',
        top: '5px',
        left : '5px'
    }
  }));
  



function QuizResults({score , questions,startTimer}) {

    const classes = useStyles();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const testResult = useSelector(state => state.testResult)
    const results = useSelector(state => state.results)
    const [resultz,setResults] = useState({})
    const [qResult , setqResult] = useState('');

    const [endTimer,setEndTimer] = useState(moment())

    const [finalScore,setFinalScore] = useState('')

    useEffect(() => {

            if(user != null) {
                let results = {
                    score: score * 2,
                    correct : score,
                    wrong : Object.keys(questions).length - score,
                    time : timeFormat(endTimer.diff(startTimer))   ,
                    date : moment().format("DD-MM-YYYY hh:mm:ss")
                }

                db.collection('parent').doc(user.uid).collection('quizResults').add({ 
                    score: score,
                    correct : score,
                    wrong : Object.keys(questions).length - score,
                    time : timeFormat(endTimer.diff(startTimer))   ,
                    date : moment().format("DD-MM-YYYY hh:mm:ss")})

                .then(function(docRef) {
                   dispatch({
                       type : 'TEST_RESULT',
                       payload : results
                   })
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            }
            

      },[]);
      

      const timeFormat = millisec => {
        var seconds = (millisec / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours != "") {
            return hours + ":" + minutes + ":" + seconds;
        }
        return minutes + ":" + seconds;
    }


    return (
        <div className="quizResults">  
               <div className="quizResults__infos">
               <h3 className="bravo">Бравооо !!! 🎉 🎉🎉</h3>
                <div className="results_infos1">
                    <CheckIcon color="primary" className="info_img1" />
                    <span>Точни одговори :{score} </span>
                </div>
                <div className="results_infos1">
                    <CloseIcon color="secondary" className="info_img1" />
                    <span>Неточни одговори : {Object.keys(questions).length - score}</span>
                </div>
                <div className="results_infos1">
                    <EqualizerIcon className={classes.poeni}/>
                    <span>Освоени поени : {score * 2}</span>
                </div>
                <div className="results_infos1">
                    <TimerIcon className={classes.timer}/>
                    <span>Времетраење : {timeFormat(endTimer.diff(startTimer))}</span>
                </div>
     
                <div className="kids_img">
                    <img className="kid" src={tazno} alt=""/>
                    <img className="kid" src={srekno} alt=""/>
                    <img className="kid" src={pospano} alt=""/>
                    <img className="kid" src={povredeno} alt=""/>
                </div>

                <div className="play_again">
                    <Link to="/" className="play_again_link">
                    <PlayArrowIcon className={classes.timer}/>
                    <span>Играј повторно </span>
                    </Link>
                </div>
               </div>
             
               
           </div>
    )
}

export default QuizResults
