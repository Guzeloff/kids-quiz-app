import React from 'react'

import './LandingPage.css'
import { Link } from 'react-router-dom'
import QuizCard from './QuizCard'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Header from './Header'
import Popover from '@material-ui/core/Popover';

function LandingPage() {
    return (
        <div className="landingpage">
            
            {/* Header */}
            <Header/>
            <div className="landingpage__quiz">
            <QuizCard/>
            </div>


            <Link  className="landingpage_gameinfo" to="/gameinfo"><h3>Информации за играта</h3></Link>
        </div>
    )
}

export default LandingPage
