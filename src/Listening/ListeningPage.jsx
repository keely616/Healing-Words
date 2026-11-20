import "./Listening.css";
import Header from "../Header/Header";
import PolaroidPhoto from "./PolaroidPhoto";
import ReminderNote from "./ReminderNote";
import JournalCard from "./JournalCard";
import FooterNav from "./FooterNav";
import { useSpeechGrowth } from "../hooks/useSpeechGrowth";

// Scrapbook-style page where the user speaks and watches the plant grow.
// Owns the speech state and passes it down to the journal card.
function ListeningPage() {
    const speech = useSpeechGrowth();
    return (
        <>
            <Header />
            <div className="lp">
                {/* Soft background wash */}
                <div className="watercolor-bg"></div>

                <main className="lp-main">
                    {/* Left column: photo and sticky note */}
                    <div className="lp-left">
                        <PolaroidPhoto />
                        <ReminderNote />
                    </div>
                    {/* Right column: journal card with the controls */}
                    <div className="lp-right">
                        <JournalCard speech={speech} />
                        <FooterNav />
                    </div>
                </main>

                {/* Paper-grain texture over the whole page */}
                <div className="lp-grain"></div>
            </div>
        </>
    );
}

export default ListeningPage;
