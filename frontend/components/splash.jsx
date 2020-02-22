import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("home-icon")[0].style.backgroundImage = `url(${harmonyIcon})`;
        document.getElementsByClassName("home-icon")[0].style.backgroundSize = 'cover';
        document.getElementsByClassName("home-icon")[0].style.backgroundPosition = 'center center';
    }

    render() {
        return (
            <div id="splash">
                <header id="header-nav">
                    <ul className="nav-links">
                        <li><a className="home-icon-link" href="https://harmony-chat.herokuapp.com/#/"><i className="home-icon"></i>HARMONY</a></li>
                        <li><a target="_blank" href="https://github.com/VoChrisK"><i className="fab fa-github"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/chris-vo-/"><i className="fab fa-linkedin"></i></a></li>
                        <li><a target="_blank" href="https://angel.co/chris-vo-3"><i className="fab fa-angellist"></i></a></li>
                        <li><a className="cv-website" target="_blank" href="https://chrisvo.dev/">CV</a></li>
                    </ul>

                    <Link id="login-link" to="/login">Login</Link>
                </header>

                <section id="splash-content">
                    <h1>It's time to ditch Discord.</h1>
                    <p>All-in-one text chat for everyone who wants to communicate with other people. Stop using Discord. Rejoice and harmonize with each other instead.</p>
                </section>

                <div className="splash-buttons">
                    <Link className="open-browser form-submit" to="/servers/@me">Open in browser</Link>
                    <Link className="login form-submit" to="/login">Login</Link>
                </div>

                <section className="bundle-images">
                    <img src="https://discordapp.com/assets/215346366a9a7d50924fc245ddb048d2.svg" className="cartridge" />                
                    <img src="https://discordapp.com/assets/81d74b2ebb053fbccee41865a47d48c3.svg" className="block" />                
                    <img src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg" className="monitor" />
                    <img src="https://discordapp.com/assets/15149ecb9d5cd8faa24e1bbf45d70e5b.svg" className="shield" />
                    <img src="https://discordapp.com/assets/0b5a0339571e72656eea93eb55d73eae.svg" className="potion" />
                    <img src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg" className="laptop" />
                    <img src="https://discordapp.com/assets/c4bae281354a2b4e2db85415955e0994.svg" className="controller" />
                    <img src="https://discordapp.com/assets/69db64955960eb333f5ff831cc1c0294.svg" className="headphones" />
                    <img src="https://discordapp.com/assets/eb301f28da3199edbd3ef19690d61674.svg" className="bomb" />
                    <img src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg" className="coin-1" />
                    <img src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg" className="coin-2" />
                    <img src="https://discordapp.com/assets/82fa4f388cfc9cf47a6972ae39ae90de.svg" className="iphone" />
                    <img src="https://discordapp.com/assets/5a31f41848bf3ba1817a092ac28c623d.svg" className="android" />
                    <img src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg" className="circle-1" />
                    <img src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg" className="cross-1" />
                    <img src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg" className="triangle-1" />
                    <img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot-1" />
                    <img src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg" className="triangle-2" />
                    <img src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg" className="square-1" />
                    <img src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg" className="square-2" />
                    <img src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg" className="cross-2" />
                    <img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot-2" />
                    <img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot-3" />
                    <img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot-4" />
                    <img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot-5" />
                    <img src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg" className="circle-2" />
                </section>
            </div>
        );
    }
}

export default Splash;