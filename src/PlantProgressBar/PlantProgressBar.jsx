const SPROUT_COUNT = 10;
const POINTS_PER_SPROUT = 10;

// Segmented growth bar: one filled segment per 10 points.
// `points` is 0-100; the aria attributes expose it to screen readers.
function PlantProgressBar({ points = 0 }) {
    const filled = Math.floor(points / POINTS_PER_SPROUT);
    return (
        <div
            className="segmented-bar"
            role="progressbar"
            aria-label="Seed growth"
            aria-valuemin={0}
            aria-valuemax={SPROUT_COUNT * POINTS_PER_SPROUT}
            aria-valuenow={points}
        >
            {Array.from({ length: SPROUT_COUNT }, (_, i) => (
                <div key={i} className={i < filled ? "filled" : ""}></div>
            ))}
        </div>
    );
}

export default PlantProgressBar;
