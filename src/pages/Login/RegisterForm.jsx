import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const userData = {
            registeredUsername: username,
            registeredPassword: password,
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        setFullName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setError("");

        navigate("/login");
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div className="mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Register</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="fullName"
                    >
                        Full Name
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="confirmPassword"
                    >
                        Confirm Password
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="button"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
