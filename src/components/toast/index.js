import { useEffect } from "react";
import "./style.scss";

const Toast = ({ setVisible, content }) => {
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  });

  return <div className="toast">{content}</div>;
};

export default Toast;
