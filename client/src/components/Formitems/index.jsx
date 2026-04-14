import "./formitem.css";
import Input from "../input";
import TextArea from "../textArea";
import Select from "../select";

const FormItem = ({
  name,
  element = "input",
  label = "heading",
  type,
  onchange,
  options,
}) => {
  let component = <></>;
  if (element == "input") {
    component = <Input name={name} type={type} onChange={onchange} />;
  } else if (element == "textarea") {
    component = <TextArea name={name} type={type} onChange={onchange} />;
  } else if (element == "select") {
    component = <Select options={options} onChange={onchange} name={name} />;
  }
  return (
    <div className="form-item">
      <label> {label}</label>
      {component}
    </div>
  );
};

// const FormItem = () => {
//   return (
//     <div className="form-item">
//       <label>hbh</label>
//       <Input></Input>
//     </div>
//   );
// };

export default FormItem;
