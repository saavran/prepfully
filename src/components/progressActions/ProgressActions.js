import React from 'react'
import "./progress-actions.css"

export default function ProgressActions(props) {
    return (
        <div>
            <button className={props.inProgress ? "active" : ""} onClick={() => props.setInProgress(true)}>{props.inProgress ? "Started" : "Start"}</button>
            <button className={!props.inProgress ? "active" : ""} onClick={() => props.setInProgress(false)}>{!props.inProgress ? "Paused" : "Pause"}</button>
        </div>
    )
}
