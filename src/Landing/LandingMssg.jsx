import { Link } from "react-router-dom";
import "./Landing.css";

// Headline, intro text, and the button that opens the listening page.
function LandingMssg(){
    return (
        <article className = "landing-msg">
            <h2 className = "brown-heading">Say something nice.</h2>
            <h2 className = "green-heading">Watch it grow.</h2>
            <p>
                Words have power.
                Naurture your plant with positive affirmations
                and discover the subtle art of mindful speech.
            </p>
            <div className="btn-dv">
                <Link to="/listening"><button className = "green-btn">Begin Session</button></Link>
            </div>

        </article>
    );

}

export default LandingMssg;
