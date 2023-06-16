import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/Auth";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleLogin = () => {
        if (
            (username === "admin" && password === "admin") ||
            checkLocalStorageUser()
        ) {
            setError("");
            setIsLoggedIn(true);

            if (rememberMe) {
                sessionStorage.setItem("rememberMe", "true");
            } else {
                sessionStorage.removeItem("rememberMe");
            }
            navigate("/kelas-online");

            return;
        }

        setError("Invalid username or password");
    };

    const checkLocalStorageUser = () => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            const parsedData = JSON.parse(userData);
            const { registeredUsername, registeredPassword } = parsedData;

            return (
                username === registeredUsername &&
                password === registeredPassword
            );
        }

        return false;
    };

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="h-screen w-screen bg-gray-100">
            <div className="flex h-full flex-1 flex-col items-center justify-center px-4 sm:px-0">
                <div
                    className="flex w-full rounded-lg bg-white shadow-lg sm:mx-0 sm:w-3/4 lg:w-1/2"
                    style={{ height: "500px" }}
                >
                    <div
                        className="hidden rounded-lg md:block md:w-1/2"
                        style={{
                            background:
                                "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    ></div>
                    <div className="flex w-full flex-col p-4 md:w-1/2">
                        <div className="mb-8 flex flex-1 flex-col justify-center">
                            <h1 className="text-center text-4xl font-thin">
                                Selamat Datang Kembali!
                            </h1>
                            <p className="text-center font-thin">
                                Login untuk dapat menggunakan EduGrow
                            </p>
                            {error && (
                                <div className="mb-4 text-center text-red-500">
                                    {error}
                                </div>
                            )}
                            <div className="mt-4 w-full">
                                <form className="form-horizontal mx-auto w-3/4">
                                    <div className="mt-4 flex flex-col">
                                        <input
                                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mt-4 flex flex-col">
                                        <input
                                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <input
                                            className="mr-2 leading-tight"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={handleRememberMe}
                                        />
                                        <label className="text-sm text-gray-700">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="mt-8 flex flex-col">
                                        <button
                                            className="focus:shadow-outline rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                            type="button"
                                            onClick={handleLogin}
                                        >
                                            Masuk
                                        </button>
                                        <span className="mt-4 text-center font-thin">
                                            Belum Memiliki Akun?
                                            <a
                                                onClick={() =>
                                                    navigate("/register")
                                                }
                                                className="cursor-pointer text-blue-500"
                                            >
                                                {" "}
                                                Registrasi Sekarang!
                                            </a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
