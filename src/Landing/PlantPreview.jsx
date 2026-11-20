import plantPic from "../assets/sunflower_stage3a.png";
import "./Landing.css";

// Card showing the plant's current stage (image only, no progress bar).
function PlantPreview(){

    return(
        <article className="plant-preview">
            <h3>Current Plant Status </h3>
            <img className="plant-img" src={plantPic} alt="sunflower stage 3a" />
            {/* alt and src need to be able to change (NOT FIXED) */}
        </article>
    );
}

export default PlantPreview;
