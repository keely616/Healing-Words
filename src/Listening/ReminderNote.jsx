import { WashiTape } from "./Decor";

// Taped "be gentle" sticky note beside the photo.
function ReminderNote() {
    return (
        <div className="reminder-note">
            <WashiTape className="reminder-tape" />
            <p className="mono reminder-label">REMINDER</p>
            <p className="handwritten reminder-text">
                Remember:<br />
                <span>be gentle</span>
            </p>
        </div>
    );
}

export default ReminderNote;
