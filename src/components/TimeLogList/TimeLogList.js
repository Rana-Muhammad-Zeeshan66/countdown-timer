import "./styles/timeLogList.scss";

const TimeLogList = ({ entryLogList }) => {
  console.log("entryLogList", entryLogList);
  return (
    <div className="timeloglist-container">
      <ul className="timeloglist-list">
        {entryLogList.map((logTime, index) => (
          <li key={logTime.stopperTime} className="timeloglist-listRow">
            <div>#{index + 1}</div>

            <div
              className={`${
                logTime.stopperTimeType === "Start"
                  ? "time-color-start"
                  : logTime.stopperTimeType === "Pause"
                  ? "time-color-pause"
                  : logTime.stopperTimeType === "Split"
                  ? "time-color-split"
                  : "time-color-reset"
              } `}
            >
              {logTime.stopperTime}
            </div>

            <div>{logTime.stopperTimeType}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLogList;
