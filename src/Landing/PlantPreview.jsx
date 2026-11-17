import PlantProgressBar from "../PlantProgressBar/PlantProgressBar";
import PlantPic from "../assets/sunflower_stage3a.png";
import "./Landing.css";
import "./Landing.css";


function PlantPreview(){

    return(
        <article className="plant-preview">
            <h3>Current Plant Status </h3>
            <img  className = "plant-img" src = {PlantPic} alt ="sunflower stage 3a"></img> 
            {/* alt and src need to be able to change (NOT FIXED) */}
            <PlantProgressBar/>
        </article>
    );
}

export default PlantPreview