import React, { useEffect, useState } from 'react'
import "./progress-cirlce.css"

export default function ProgressCircles(props) {
    const [timeLeft, setTimeLeft] = useState(100);
    const strokeDashoffset = 440 - (440 * timeLeft) / 100
    const timeDuration = props.time * 10

    useEffect(() => {

        if (!timeLeft) return;
        let intervalId
        if (props.inProgress) {
            intervalId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, timeDuration);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);

    }, [timeLeft, props.inProgress]);

    return (
        <div className="progress-circle">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle style={{ strokeDashoffset }} cx="70" cy="70" r="70"></circle>
            </svg>
            <h2>{timeLeft}%</h2>
        </div>
    )
}
