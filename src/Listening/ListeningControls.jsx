// Start, pause/resume and stop buttons.
// Start is disabled while listening or if the browser lacks speech support;
// pause and stop are disabled until a session is running.
function ListeningControls({ status, supported, onStart, onPause, onStop }) {
    const isIdle = status === "idle";
    const startLabel = status === "listening" ? "Listening..." : "Start Listening";
    return (
        <div className="controls-row">
            <button className="mic-pill" onClick={onStart} disabled={!supported || status === "listening"}>
                <svg className="icon" viewBox="0 0 256 256" fill="currentColor"><rect x="88" y="16" width="80" height="124" rx="40"></rect><path d="M48,120 A80,80 0 0 0 208,120 L192,120 A64,64 0 0 1 64,120 Z"></path><rect x="120" y="120" width="16" height="104"></rect><rect x="64" y="224" width="128" height="16" rx="8"></rect></svg>
                <span className="mono mic-label">{startLabel}</span>
            </button>

            <div className="circle-group">
                <button className="circle-control" title={status === "paused" ? "Resume" : "Pause"} onClick={onPause} disabled={isIdle}>
                    <svg className="icon" viewBox="0 0 256 256" fill="currentColor"><path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Z"></path><path d="M96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path></svg>
                </button>
                <button className="circle-control" title="Stop" onClick={onStop} disabled={isIdle}>
                    <svg className="icon" viewBox="0 0 256 256" fill="currentColor"><path d="M200,32H56A24,24,0,0,0,32,56V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V56A24,24,0,0,0,200,32Z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default ListeningControls;
