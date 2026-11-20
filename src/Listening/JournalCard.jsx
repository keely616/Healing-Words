import { WashiTape } from "./Decor";
import GrowthPanel from "./GrowthPanel";
import ListeningControls from "./ListeningControls";

// Main card: title, growth panel, controls, and feedback message.
// `speech` is the object returned by useSpeechGrowth.
function JournalCard({ speech }) {
    return (
        <div className="scrapbook-card">
            <WashiTape style={{ top: "-12px", right: "40px", transform: "rotate(15deg)", width: "120px" }} />

            <header className="journal-header">
                <div className="mono journal-entry">
                    <span>ENTRY NO. 001</span>
                </div>
                <h1>Healing Words</h1>
            </header>

            <GrowthPanel points={speech.points} />

            <div className="journal-body">
                <ListeningControls
                    status={speech.status}
                    supported={speech.supported}
                    onStart={speech.start}
                    onPause={speech.pause}
                    onStop={speech.stop}
                />
                <div className="journal-quote">
                    <p>&quot;Your words stay in the room. It only listens for the warmth of your voice.&quot;</p>
                    {/* Result message; aria-live lets screen readers announce it */}
                    <p className="mono quote-status" role="status" aria-live="polite">{speech.message}</p>
                </div>
            </div>
        </div>
    );
}

export default JournalCard;
