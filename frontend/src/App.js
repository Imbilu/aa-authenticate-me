// import { Router, Switch } from "react-router-dom";
import { Router, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";

function App() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.getCurrentUser()).then(() => setLoaded(true));
    }, [dispatch]);
    return (
        <Switch>
            <Route path="/login">
                <LoginFormPage />
            </Route>
        </Switch>
    );
}

export default App;
