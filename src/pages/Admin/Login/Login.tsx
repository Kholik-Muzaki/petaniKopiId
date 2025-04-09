import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../image";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log("Login dengan:", { email, password, rememberMe });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={image.logo2} alt="Logo" className="w-14 h-14 object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Selamat Datang di <span className="text-green-500">PetaniKopi</span>.id
                </h2>

                {/* Form Login */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Masukkan email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Masukkan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Remember Me & Lupa Password */}
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Ingat saya
                        </label>
                        <Link to="/lupa-password" className="text-green-500 hover:underline">
                            Lupa password?
                        </Link>
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                    >
                        Masuk
                    </button>
                </form>

                {/* Link ke Register */}
                <p className="text-center text-gray-600 mt-4">
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-green-500 hover:underline">
                        Daftar sekarang
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
