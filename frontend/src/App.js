// import { Router, Switch } from "react-router-dom";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.getCurrentUser()).then(() => setLoaded(true));
    }, [dispatch]);
    return (
        <>
            <Navigation loaded={loaded} />
            {loaded && (
                <Switch>
                    <Route path="/login"></Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
