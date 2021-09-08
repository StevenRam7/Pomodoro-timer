import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function DurationTimers({
  session,
  focusDuration,
  breakDuration,
  setFocusDuration,
  setBreakDuration,
}) {
  const decreaseFocus = (event) => {
    event.preventDefault();
    if (focusDuration > 5) {
      setFocusDuration((time) => time - 5);
    }
  };

  const increaseFocus = (event) => {
    event.preventDefault();
    if (focusDuration < 60) {
      setFocusDuration((time) => time + 5);
    }
  };
  const decreaseBreak = (event) => {
    event.preventDefault();
    if (breakDuration > 1) {
      setBreakDuration((time) => time - 1);
    }
  };
  const increaseBreak = (event) => {
    event.preventDefault();
    if (breakDuration < 15) {
      setBreakDuration((time) => time + 1);
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decreaseFocus}
              disabled={session != null}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={increaseFocus}
              disabled={session != null}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decreaseBreak}
                disabled={session != null}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={increaseBreak}
                disabled={session != null}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DurationTimers;
