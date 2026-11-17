import "./Header.css";
function Header (){


    return(
        <header>
            <nav className = "nav-bar">
                <div className = "menu-container">
                    <div className = "menu-title"><a href = "#">{"Healing Words".toUpperCase()}</a></div>
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