import React,{useEffect,useState} from 'react'

import { useSelector , useDispatch } from 'react-redux'
import {auth,db} from '../firebase'
import {useHistory} from 'react-router-dom'
import Header from './Header'
import './Parents.css'
import ParentsSingleResult from './ParentsSingleResult'



function Parents() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const results = useSelector(state => state.results)


    return (
        <div className="parents">
            <Header/>
            <h3>Резултати од квизот на вашето дете </h3>
            <div className="parents__card">
                    {results.length > 0 ?
                    (
                    results.map((result,i) => (
                       <ParentsSingleResult 
                       key={i}
                       correct={result.correct}
                       wrong={result.wrong}
                       time={result.time}
                       score={result.score}
                       date={result.date} />
                    ))
                    ) 
                    : 
                    (   
                        <div className="parents_no_test">
                             <p>Вашето дете сеуште нема завршено ниту 1 тест</p>
                         </div>
                    )
                       

                      
                    }
            </div>
        </div>
    )
}   

export default Parents
