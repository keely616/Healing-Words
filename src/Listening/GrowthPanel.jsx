import PlantProgressBar from "../PlantProgressBar/PlantProgressBar";
import { PushPin } from "./Decor";

// Red panel showing the score (out of 100) and the segmented growth bar.
function GrowthPanel({ points, daysOfBloom = 0 }) {
    return (
        <div className="growth-panel">
            <PushPin style={{ top: "10px", right: "10px", background: "#900" }} />
            <div className="growth-head">
                <h3 className="mono growth-title">Seed Growth</h3>
                <span className="mono growth-score">{points}/100</span>
            </div>
            <PlantProgressBar points={points} />
            <div className="growth-foot">
                <p className="handwritten growth-note">each sprout = 10 kind words</p>
                <div className="growth-days">
                    <span>{daysOfBloom}</span>
                    <p className="mono">DAYS OF<br />BLOOM</p>
                </div>
            </div>
        </div>
    );
}

export default GrowthPanel;
