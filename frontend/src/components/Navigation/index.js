import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileBUtton from "./ProfileButton";

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">signup</NavLink>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/logout">Logout</NavLink>
                    </li>
                    <li>
                        <ProfileBUtton />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
