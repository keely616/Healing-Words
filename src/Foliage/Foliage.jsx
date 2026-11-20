
import background_foliage from "../assets/background_foliage.png";
import "./Foliage.css";
import {motion} from "motion/react";

// Decorative leaves on both sides of the page. The second image is
// mirrored in CSS. The group fades in and slides up when the page loads.
function Foliage() {
    return (
        <motion.div
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className="foliage-container">
            <img className="foliage" src={background_foliage} />
            <img className="foliage mirrored" src={background_foliage} />
        </motion.div>
    );
}

export default Foliage;

