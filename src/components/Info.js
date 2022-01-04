import React from "react"

export default function Info() {
    return ( 
        <div className="info">
            <img src="./images/avatar.png" alt="my avatar" className="avatar"  />
            <h1 className="name">Ilona Goldmane</h1>
            <h3 className="title">Frontend Developer</h3>
            <a className="portfolio" href="https://replit.com/@ilonaGold" target="_blank" rel="noreferrer">PORTFOLIO</a>
            <div className="profile-cta">
                <button className="btn-email"><i className="fas fa-envelope"></i>Email</button>
                <button className="btn-linkedin"><i className="fab fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}