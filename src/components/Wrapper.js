import "./Wrapper.css";

const Wrapper = ({ children, dark }) => {
  return (
    <div
      className="wrapper"
      style={{ backgroundColor: dark ? "black" : "#485461" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
