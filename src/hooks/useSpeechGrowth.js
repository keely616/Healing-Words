import { useEffect, useRef, useState } from "react";

// Listens to the microphone, turns speech into words, and scores them.
// Each positive word = +1 point, each negative word = -1 point.
// Every 10 points fills one sprout on the growth bar (max 100).
const POSITIVE_WORDS = ["good", "great"];
const NEGATIVE_WORDS = ["bad", "awful"];
export const MAX_POINTS = 100;

// Count how many positive and negative words were spoken.
function scoreWords(words) {
    // Lowercase and strip punctuation so "Great!" matches "great".
    const clean = words.map((w) => w.toLowerCase().replace(/[^a-z']/g, ""));
    return {
        positive: clean.filter((w) => POSITIVE_WORDS.includes(w)).length,
        negative: clean.filter((w) => NEGATIVE_WORDS.includes(w)).length,
    };
}

// The browser's speech API (Chrome/Edge only). Undefined if unsupported.
const SpeechRecognition =
    typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);

// Returns the session state plus start / pause / stop controls.
// status: 'idle' | 'listening' | 'paused'
export function useSpeechGrowth() {
    const [status, setStatus] = useState("idle");
    const [points, setPoints] = useState(0);
    const [message, setMessage] = useState(""); // feedback shown to the user

    // Refs hold values that must stay current inside the recognition
    // callbacks without triggering a re-render.
    const recognitionRef = useRef(null); // the active recognition session
    const wordsRef = useRef([]);         // words heard since the last stop
    const statusRef = useRef("idle");    // mirrors `status` for callbacks

    // Keep the state and its ref in sync.
    const updateStatus = (next) => {
        statusRef.current = next;
        setStatus(next);
    };

    // Stop the current session. Clear the ref first so onend won't restart it.
    const endRecognition = () => {
        const recognition = recognitionRef.current;
        recognitionRef.current = null;
        if (recognition) recognition.stop();
    };

    // Create a new recognition session and start listening.
    const beginRecognition = () => {
        const recognition = new SpeechRecognition();
        recognition.continuous = true; // keep listening across pauses in speech

        // Save each finished phrase as individual words.
        recognition.onresult = (e) => {
            for (let i = e.resultIndex; i < e.results.length; i++) {
                if (e.results[i].isFinal) {
                    wordsRef.current.push(...e.results[i][0].transcript.trim().split(/\s+/));
                }
            }
        };

        // If the user denies microphone access, tell them and reset.
        recognition.onerror = (e) => {
            if (e.error === "not-allowed" || e.error === "service-not-allowed") {
                setMessage("Microphone access was blocked.");
                updateStatus("idle");
            }
        };

        // Browsers end recognition after silence; restart while still listening.
        recognition.onend = () => {
            if (statusRef.current === "listening" && recognitionRef.current === recognition) {
                try {
                    recognition.start();
                } catch {
                    // already started
                }
            }
        };

        recognition.start();
        recognitionRef.current = recognition;
    };

    // Start (or resume) listening.
    const start = () => {
        if (!SpeechRecognition) {
            setMessage("Speech recognition is not supported in this browser.");
            return;
        }
        if (statusRef.current === "listening") return; // already running
        setMessage("");
        updateStatus("listening");
        beginRecognition();
    };

    // Toggle between paused and listening. Words heard so far are kept.
    const pause = () => {
        if (statusRef.current === "listening") {
            updateStatus("paused");
            endRecognition();
        } else if (statusRef.current === "paused") {
            start();
        }
    };

    // End the session, score the words heard, and update the points.
    const stop = () => {
        if (statusRef.current === "idle") return;
        updateStatus("idle");
        endRecognition();

        const { positive, negative } = scoreWords(wordsRef.current);
        wordsRef.current = []; // reset for the next session

        // Net change, with the total kept between 0 and MAX_POINTS.
        const delta = positive - negative;
        setPoints((p) => Math.min(MAX_POINTS, Math.max(0, p + delta)));

        if (delta > 0) setMessage(`Your words gained ${delta} point${delta === 1 ? "" : "s"}.`);
        else if (delta < 0) setMessage(`Your words lost ${-delta} point${delta === -1 ? "" : "s"}.`);
        else setMessage("No points gained or lost this time.");
    };

    // On unmount (e.g. leaving the page), shut the microphone off.
    useEffect(
        () => () => {
            statusRef.current = "idle";
            const recognition = recognitionRef.current;
            recognitionRef.current = null;
            if (recognition) recognition.stop();
        },
        [],
    );

    return { status, points, message, supported: Boolean(SpeechRecognition), start, pause, stop };
}
