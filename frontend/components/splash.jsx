import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="splash">
                <header id="header-nav">
                    <ul className="nav-links">
                        <li><Link to="#">Github</Link></li>
                        <li><Link to="#">LinkedIn</Link></li>
                    </ul>

                    <Link id="login-link" to="/login">Login</Link>
                </header>

                <section id="splash-content">
                    <h1>It's time to ditch Skype and Teamspeak.</h1>
                    <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
                </section>
            </div>
        );
    }
}

export default Splash;