import { useParams } from "react-router-dom";

const RGB = () => {
  const { r, g, b } = useParams();
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      RGB({r}%, {g}%, {b}%)
    </div>
  );
};

export default RGB;
