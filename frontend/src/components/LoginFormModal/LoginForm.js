import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSessionUser } from "../../store/session";
import "./LoginForm.css";

function LoginForm() {
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

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
        <div className="user-data-form">
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
        </div>
    );
}

export default LoginForm;
