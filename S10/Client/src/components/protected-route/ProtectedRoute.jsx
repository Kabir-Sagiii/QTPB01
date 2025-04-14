import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../../services/apiCalls/user";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      //action
      getLoggedUser()
        .then((res) => {
          console.log("then in ProtectedRoutes");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/");
    }
  }, []);
  return <div>{children}</div>;
}

export default ProtectedRoute;
