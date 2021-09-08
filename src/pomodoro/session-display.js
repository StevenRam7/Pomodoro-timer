import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function SessionDisplay({
  session,
  focusDuration,
  breakDuration,
  isTimerRunning,
}) {
  let percentTimeLeft = "";
  if (session == null) {
    return null;
  } else {
    if (session.label === "Focusing") {
      percentTimeLeft =
        (1 - session.timeRemaining / (focusDuration * 60)) * 100;
    }
    if (session.label === "On Break") {
      percentTimeLeft =
        (1 - session.timeRemaining / (breakDuration * 60)) * 100;
    }
    return (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {session.label === "Focusing"
                ? minutesToDuration(focusDuration)
                : minutesToDuration(breakDuration)}{" "}
              minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            <h3 className="pause-text">
              {isTimerRunning === false ? "PAUSED" : null}
            </h3>
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
                aria-valuenow={percentTimeLeft}
                style={{ width: percentTimeLeft + "%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionDisplay;
