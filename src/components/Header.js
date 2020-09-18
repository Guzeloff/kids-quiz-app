import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import './Header.css'

import { useSelector , useDispatch } from 'react-redux'
import {auth,db} from '../firebase'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';

function Header() {


    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory();

    const logout = () =>{
        if(user){
            auth.signOut();
            dispatch({
                type : 'LOGOUT'
            })
            history.push("/")
        }
    }

    return (
       
        <div className="landingpage__header">
        <Link className="header__link" to="/">
            <img className="landingpage__logo" src="https://i.pinimg.com/originals/71/d6/c3/71d6c35dde4eb984d288ffada8222f3d.png" alt="kido_log"/>
            <h3 className="landingpage__title">KIDO</h3>
        </Link>
        {user ? (<>
            <Link className="header__link" to="/parents">
            <Button className="header__parents" variant="contained" color="secondary">
                Родители
            </Button>
             </Link> 
            <Link className="header__link" to="/">

            <div className="header_logout_t">
            <Button onClick={logout} className="header__logout" color="secondary">
                <p>Одјави се</p> 
            </Button>
            <h5> {user.email}</h5>
            </div>
            
            </Link>
        </>)
        :
        (<>
        <Link className="header__link" to="/parents">
            <Button className="header__parents" variant="contained" color="secondary">
                Родители
            </Button>
        </Link>  

        </>)
        }

    </div>
    )
}

export default Header;
