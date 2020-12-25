import React, { useState } from 'react'
import "./progress-wrapper.css"
import ProgressActions from '../progressActions/ProgressActions'
import ProgressCircles from '../progressCircles/ProgressCircles'

export default function ProgressWrapper(props) {
    const [inProgress, setInProgress] = useState(false)

    const setInProgressFunc = (type) => {
        setInProgress(type)
    }
    return (
        <div className="progress-wrapper">
            <ProgressCircles inProgress={inProgress} time={props.time} />
            <ProgressActions inProgress={inProgress} setInProgress={setInProgressFunc} />
        </div>
    )
}
