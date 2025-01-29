import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.palette.background.default }}
      className="flex items-center justify-center w-full h-screen text-3xl"
    >
      <Link className="text-blue-600 underline font-[600]" to={`monitoring`}>
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Login;
