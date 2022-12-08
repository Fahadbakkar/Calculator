import "./Button.css";
const Button = ({ className, value, onClick, dark }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: dark ? "rgb(54,52, 52)" : "rgb(80, 60, 209)",
      }}
    >
      {value}
    </button>
  );
};

export default Button;
