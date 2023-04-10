import "./styles/stopWatchStyle.scss";

const StopWatch = ({ hours, minutes, seconds, milliseconds }) => {
  return (
    <div className="stopwatch-time-container">
      <span className="stopwatch-time">
        {milliseconds ? (
          <>
            {`${hours}:${minutes}:${seconds}.${milliseconds
              .toString()
              .slice(0, 1)}`}
            <span className="stopwatch-time-millisecond-small">
              {milliseconds.toString().slice(1)}
            </span>
          </>
        ) : (
          "00:00:00.0"
        )}
      </span>
    </div>
  );
};

export default StopWatch;
