// Small decorative pieces for the scrapbook look.
// Pass `style` to position or rotate each one.

// Strip of translucent tape.
export function WashiTape({ className = "", style }) {
    return <div className={`washi-tape ${className}`} style={style}></div>;
}

// Round pin that holds a note to the page.
export function PushPin({ style }) {
    return <div className="push-pin" style={style}></div>;
}
