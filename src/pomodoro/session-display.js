import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function SessionDisplay({ session, focusDuration, breakDuration }) {
    let percentTimeLeft = "";
    if (session == null) {
        return null;
    }
    else {
        if (session.label == "Focusing") {
            percentTimeLeft = (1 - ((session.timeRemaining)/(focusDuration * 60))) * 100;
        }
        if (session.label == "On Break") {
            percentTimeLeft = (1 - ((session.timeRemaining)/(breakDuration * 60))) * 100;
        }
        return <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2" disabled={session == null}>
          <div className="col">
            <h2 data-testid="session-title">

              {session?.label} for {session.label == "Focusing" ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"                
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentTimeLeft} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: percentTimeLeft + "%" }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    }
}

export default SessionDisplay;