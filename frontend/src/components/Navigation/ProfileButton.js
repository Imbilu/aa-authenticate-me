import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return (
        <div>
            <button id="profile-btn">
                <i className="fa-regular fa-user" onClick={openMenu}></i>
            </button>
            {showMenu && (
                <ul className="dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;
