import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={["/", "/invite", "/get_username", "/allow_notification"]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfirmation} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>

      <Route exact path={["/home", "/upcoming"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/upcoming" component={Upcoming} />
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
