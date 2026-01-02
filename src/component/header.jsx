import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={{ marginBottom: "100px" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow"
                style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>

                <div className="container">

                    {/* Logo + Nom */}
                    <div className="d-flex align-items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/reactjs.webp"
                            alt=""
                            width="60"
                            height="55"
                        />
                        <h1 className="navbar-brand text-info ms-2 m-0 p-0">
                            ReactCours Pro <br />
                            <span className="text-info">by Az-eddine</span>
                        </h1>
                    </div>

                    {/* Bouton Toggle Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className='nav-item'>
                                <Link to="/" className='nav-link'>Accueil</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/cours" className='nav-link'>Cours</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/coursD" className='nav-link'>Cours Détail</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/QCM" className='nav-link'>QCM</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/exercice" className='nav-link'>Exercice</Link>
                            </li>

                            <li className="nav-item d-none">
                                <a
                                    className="nav-link"
                                    href="https://www.linkedin.com/in/ton-profil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* Icône LinkedIn si tu veux */}
                                </a>
                            </li>

                            <li className="nav-item mt-3 mt-lg-0">
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/Profil" className='nav-link'><img src='https://thumbs.dreamstime.com/z/illustration-d-un-avatar-%C3%A9tudiant-ic%C3%B4ne-de-profil-utilisateur-jeunesse-portrait-simple-l-dessin-anim%C3%A9-vectorielle-276205531.jpg' className="rounded-circle d-block mx-auto mb-3" alt="Avatar de l'utilisateur" style={{width: '50px', height: '50px', objectFit: 'cover',border:'2px solid '}} />
</Link>
                            </li>


                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
