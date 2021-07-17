import "./style.scss";

const Button = ({ text }) => {
  return (
    <div class="button_style">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </div>
  );
};

export default Button;
