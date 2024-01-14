import { Children } from "react";
import UserInfo from "./UserInfo";

const Container = ({ children }) => {
  return (
    <div>
      <p>Container do App</p>
      <UserInfo />
      {children}
    </div>
  );
};

export default Container;
