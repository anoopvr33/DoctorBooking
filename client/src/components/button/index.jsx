import "./button.css";

const Button = ({ children = "Click", Onclick, className }) => {
  return (
    <button onClick={Onclick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
