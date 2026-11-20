import { Link } from "react-router-dom";
import "./Header.css";

// Top navigation bar shared by every page. The title links back home.
function Header (){


    return(
        <header>
            <nav className = "nav-bar">
                <div className = "menu-container">
                    <div className = "menu-title"><Link to = "/">{"Healing Words".toUpperCase()}</Link></div>
                    <ul>
                        <li><a href = "#">{"about us".toUpperCase()}</a></li>
                        <li><a href = "#">{"how it works".toUpperCase()}</a></li>
                    </ul>
                </div>
            </nav>

        </header>
    );

}

export default Header;
