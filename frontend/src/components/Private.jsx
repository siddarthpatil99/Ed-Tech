import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Private = (element) => {
  //   const loggedData = useContext(UserContext);
  // return loggedData ? <props.Component /> : <Navigate to="/signin" />;
  // (
  //     loggedData.loggedUser !== null?
  //     <props.Component/>
  //     :
  //     <Navigate to="/signin" />
  // )

  const { loggedUser } = useContext(UserContext);

  if (!loggedUser) {
    console.log("User not logged in. Redirecting to signin page.");
    return <Navigate to="/signin" />;
  }

  console.log("User logged in. Rendering private component.");
  return element;
};

export default Private;
