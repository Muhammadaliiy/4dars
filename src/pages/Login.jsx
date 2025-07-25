import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email }));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111111] p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl  text-[#D4AF37] mb-6 text-center">Welcome</h2>
        <div className="mb-4">
          <label className="block text-[#D4AF37] mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-black border border-[#D4AF37] text-white placeholder:text-[#888]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#D4AF37] mb-1">Password</label>
          <input
            type="password"
            className="w-full p-3 rounded bg-black border border-[#D4AF37] text-white placeholder:text-[#888]"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#D4AF37] text-black  py-2 rounded hover:bg-yellow-400 transition"
        >
          Log In
        </button>
        <p className="text-[#D4AF37] mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline hover:text-white">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
