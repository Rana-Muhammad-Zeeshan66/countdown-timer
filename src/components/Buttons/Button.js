import "./styles/buttonStyle.scss";

const Button = ({ actionName, actionToPerform, isDisabled }) => {
  return (
    <button
      className={`timer-action-button ${
        actionName === "Start"
          ? "button-bgcolor-start"
          : actionName === "Pause"
          ? "button-bgcolor-pause"
          : actionName === "Split"
          ? "button-bgcolor-split"
          : "button-bgcolor-reset"
      } `}
      onClick={() => actionToPerform(actionName)}
      disabled={isDisabled}
    >
      {actionName}
    </button>
  );
};

export default Button;
