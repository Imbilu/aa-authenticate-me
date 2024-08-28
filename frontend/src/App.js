// import { Router, Switch } from "react-router-dom";
import { Router, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import LoginFormPage from "./components/LoginFormPage";

function App() {
    return (
        <Switch>
            <Route path="/login">
                <LoginFormPage />
            </Route>
        </Switch>
    );
}

export default App;
