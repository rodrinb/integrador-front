import alertStyle from "./alert.module.css";

const Alert = ({ message }) => {
  return (
    <div className={alertStyle.Alert}>
      <p className={alertStyle.text}>{message}</p>
    </div>
  );
};

export default Alert;
