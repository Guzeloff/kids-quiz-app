import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import './ParentsSingleResult.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimerIcon from '@material-ui/icons/Timer';

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
  


function ParentsSingleResult({correct,date,wrong,time,score}) {

    const classes = useStyles();

    return (
           <div className="parentsSingleResult">  
               <div className="parentsSingleResult__infos">
                <h3>Квизот е завршен на : {date} </h3>
                <div className="results_infos">
                    <CheckIcon color="primary" className="info_img" />
                    <span>Точни одговори : {correct} </span>
                </div>
                <div className="results_infos">
                    <CloseIcon color="secondary" className="info_img" />
                    <span>Неточни одговори : {wrong}</span>
                </div>
                <div className="results_infos">
                    <EqualizerIcon className={classes.poeni}/>
                    <span>Освоени поени : {score}</span>
                </div>
                <div className="results_infos">
                    <TimerIcon className={classes.timer}/>
                    <span>Времетраење : {time}</span>
                </div>
               </div>
           </div>
    )
}

export default ParentsSingleResult
