import "./select.css";

const Select = ({ options = [], name, className = "", onchange }) => {
  return (
    <select
      className={`custom-select ${className}`}
      onChange={onchange}
      name={name}
      id=""
    >
      <option>Select{name}</option>
      {options.map((item) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </select>
  );
};

export default Select;
