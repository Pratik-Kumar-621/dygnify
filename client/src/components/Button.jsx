import Button from "@mui/material/Button";

export const Buttons = (props) => {
  return (
    <>
      <Button
        type={props.type}
        variant={props.variant}
        color={props.color}
        className={`button ${props.color}`}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </>
  );
};
