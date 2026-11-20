import { PushPin } from "./Decor";

// Pinned polaroid of the seedling with a handwritten note and arrow.
function PolaroidPhoto() {
    return (
        <div>
            {/* Handwritten label with a curved arrow pointing at the photo */}
            <div className="handwritten friend-note">
                Our little friend...
                <svg width="40" height="30" className="friend-arrow">
                    <path d="M2,2 Q20,25 38,5" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
                </svg>
            </div>

            <div className="polaroid">
                <PushPin style={{ top: "-6px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="polaroid-photo">
                    <img
                        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
                        alt="Seedling"
                    />
                </div>
                <div className="handwritten polaroid-caption">the morning seed, day 0</div>
            </div>
        </div>
    );
}

export default PolaroidPhoto;
