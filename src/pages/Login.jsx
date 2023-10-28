import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../utility/api"

export default function Login() {
    const [ loginFormData, setLoginFormData ] = useState({ email: "", password: "" });
    const [ status, setStatus ] = useState("idle");
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/host";

    function handleSubmit(e) {
        setStatus("submitting")
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => {
                setError(null);
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setStatus("idle");
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && <h3>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3>{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    className="login__email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    className="login__password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button className="login__button" disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    )

}
