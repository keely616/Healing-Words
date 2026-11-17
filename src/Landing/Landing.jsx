import Foliage from "../Foliage/Foliage";
import LandingMssg from "./LandingMssg";
import PlantPreview from "./PlantPreview";
import "./Landing.css";

function Landing (){
    return(
        <main className = "landing">
            <div className = "landing-content">
                <div className = "landing-item">
                    <PlantPreview/>
                </div>
                <div className = "landing-item">
                    <LandingMssg/>
                </div>
            </div>
            
            
        </main>
    );
    
}

export default Landing;