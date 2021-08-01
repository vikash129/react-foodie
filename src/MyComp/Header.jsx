import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Redirect } from 'react-router'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header() {

    let loginData = JSON.parse(localStorage.getItem('login'))
    let text

    loginData === null ? text = 'login' : text = 'log out'

    console.log(text, loginData)


    const logout = (e) => {
        e.preventDefault()
        let q = prompt('sure want to logout ??  yes/no')

        if (q === 'yes') {
            localStorage.clear()
            window.location.reload()
            return <Redirect to='/login' />
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
                <Link className="navbar-brand" to="/">
                    <img src='/static/media/logo.6ce24c58.svg' className='App-logo' alt='alt' />

                    Vk-Restaurent</Link>

                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">



                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <FontAwesomeIcon icon={faHome} /> <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/list">List <FontAwesomeIcon icon={faList} /></Link>
                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/create">Create <FontAwesomeIcon icon={faPlus} />
                            </Link>
                        </li>



                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us </Link>
                        </li>
                    </ul>


                    <div className="d-flex bg-light  ">

                        {text === 'login' ?


                            <Link className="nav-link text-dark" to='login'  >     LogIn <FontAwesomeIcon icon={faUser} />     </Link>


                            : <button className='btn btn-primary' onClick={(e) => { logout(e) }}>Log Out <FontAwesomeIcon icon={faUser} /> </button>}


                    </div>





                </div>

            </nav>
        </>

    )
}

