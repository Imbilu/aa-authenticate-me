import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSessionUser } from "../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./LoginForm.css";

function LoginFormPage() {
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(addSessionUser({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <ul className="error-list">
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label htmlFor="credential">Enter Username or Email:</label>
            <input
                type="text"
                id="credential"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginFormPage;
