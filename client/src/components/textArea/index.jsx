import "./textarea.css";

const TextArea = ({
  className = "",
  type = "text",
  onchange,
  placeholder,
  name,
}) => {
  return (
    <textArea
      name={name}
      className={`custom-name ${className}`}
      type={type}
      onChange={onchange}
      placeholder={placeholder}
    ></textArea>
  );
};

export default TextArea;
