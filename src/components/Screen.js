import "./Screen.css";
import { Textfit } from "react-textfit";
const Screen = ({ value, dark }) => {
  return (
    <Textfit
      classname="screen"
      mode="single"
      max={70}
      style={{ color: dark ? "white" : "" }}
    >
      {value}
    </Textfit>
  );
};

export default Screen;
