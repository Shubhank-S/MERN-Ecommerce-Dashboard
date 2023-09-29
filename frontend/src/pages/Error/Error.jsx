import { useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>404</h1>
      <h1>Not Found</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Error;
