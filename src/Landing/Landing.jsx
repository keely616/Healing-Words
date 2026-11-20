import LandingMssg from "./LandingMssg";
import PlantPreview from "./PlantPreview";
import "./Landing.css";

// Landing page body: plant preview on one side, welcome message on the other.
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