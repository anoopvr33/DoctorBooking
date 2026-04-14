import "./input.css";

const Input = ({
  className = "",
  type = "text",
  onChange,
  placeholder,
  name,
}) => {
  return (
    <input
      name={name}
      className={`custom-input ${className}`}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
