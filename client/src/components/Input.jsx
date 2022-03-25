export const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input
        required
        name={props.name}
        pattern={props.pattern}
        className={`input ${props.type}`}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
    </div>
  );
};
