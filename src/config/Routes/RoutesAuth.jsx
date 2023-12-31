import { Redirect, Route } from "react-router-dom";
import SignIn from "../../components/Authetication/SignIn";
import Login from "../../components/Authetication/Login";

const RoutesAuth = () => {
  return (
    <>
      {" "}
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/signup" component={SignIn} exact />
      <Route path="/login" component={Login}/>
    </>
  );
};

export default RoutesAuth;
