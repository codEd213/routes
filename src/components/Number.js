import { useParams } from "react-router";

const Number = (props) => {
  const { param, color, bgc } = useParams();

  return (
    <div>
      {isNaN(param) ? (
        <h1 style={color ? { color: color, backgroundColor: bgc } : null}>
          This is a word: {param}
        </h1>
      ) : (
        <h1>This is a number: {param}</h1>
      )}
    </div>
  );
};

export default Number;
