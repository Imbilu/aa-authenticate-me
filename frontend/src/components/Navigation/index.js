import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ loaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div id="main-nav">
            <ul className="nav-list">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    {loaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
