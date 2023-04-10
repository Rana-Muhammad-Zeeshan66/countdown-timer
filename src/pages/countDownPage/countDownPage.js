import { useEffect, useState } from "react";

import StopWatch from "../../components/StopWatch/StopWatch";
import Button from "../../components/Buttons/Button";
import StopperTime from "../../components/StoppedTimer/StopperTime";
import TimeLogList from "../../components/TimeLogList/TimeLogList";

import "./styles/countDownPageStyle.scss";

const CountDownPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [entryLogList, setEntryLogList] = useState([]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    } else if (!isRunning) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startAndPause = (eventName) => {
    setIsRunning(!isRunning);

    if (eventName === "Pause") {
      setEntryLogList([
        ...entryLogList,
        {
          stopperTimeType: eventName,
          stopperTime: `${hours}:${minutes}:${seconds}.${milliseconds
            .toString()
            .slice(0, 1)}${milliseconds.toString().slice(1)}`,
        },
      ]);
    }
  };

  const splitTimeEvent = (eventName) => {
    setEntryLogList([
      ...entryLogList,
      {
        stopperTimeType: eventName,
        stopperTime: `${hours}:${minutes}:${seconds}.${milliseconds
          .toString()
          .slice(0, 1)}${milliseconds.toString().slice(1)}`,
      },
    ]);
  };

  const reset = (eventName) => {
    setTime(0);
  };

  return (
    <div className="countdown-page-container">
      {/* STOP WATCH */}

      <div className="countdown-output-wrapper">
        <div>
          <StopWatch
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            milliseconds={milliseconds}
          />
        </div>

        {/* SPLIT TIME */}

        <div>
          {entryLogList.length > 0 ? (
            <StopperTime
              stopperTimeType={entryLogList[entryLogList.length - 1].eventName}
              stopperTime={entryLogList[entryLogList.length - 1].stopperTime}
            />
          ) : (
            <p className="default-split-time">Split Time</p>
          )}
        </div>

        {/* BUTTONS */}

        <div className="countdown-buttons-wrapper">
          <div>
            <Button
              actionName={isRunning ? "Pause" : "Start"}
              actionToPerform={startAndPause}
              isDisabled={false}
            />
          </div>

          <div>
            <Button
              actionName={"Split"}
              isDisabled={isRunning ? false : true}
              actionToPerform={splitTimeEvent}
            />
          </div>

          <div>
            <Button
              actionName={"Reset"}
              isDisabled={isRunning}
              actionToPerform={reset}
            />
          </div>
        </div>
        {/* LIST */}

        <hr className="hr-line" />

        <div className="countdown-loglist-wrapper">
          {entryLogList.length > 0 ? (
            <TimeLogList entryLogList={entryLogList} />
          ) : (
            <div>
              <span>No Logs Yet</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountDownPage;
