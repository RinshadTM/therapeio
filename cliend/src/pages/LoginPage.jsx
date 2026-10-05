import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Heart,
  CheckCircle2,
} from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // UI only
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-50 via-white to-sky-50 px-4 py-8 sm:px-6 lg:px-8 mt-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-[0_20px_70px_rgba(8,145,178,0.12)] lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-linear-to-br from-cyan-500 via-cyan-600 to-sky-600 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">

            {/* Background decorations */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative z-10">

              {/* Logo */}
              <Link to="/" className="inline-flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg">
                  <Heart
                    className="h-5 w-5 fill-cyan-500 text-cyan-500"
                  />
                </div>

                <span className="text-2xl font-bold tracking-tight">
                  Therapeia
                </span>
              </Link>

              {/* Main content */}
              <div className="mt-20 max-w-md">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Your healing journey
                </p>

                <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                  Welcome back to your
                  <span className="block text-cyan-100">
                    safe space.
                  </span>
                </h1>

                <p className="mt-6 text-base leading-7 text-cyan-50/90">
                  Take a moment for yourself. Connect with trusted
                  therapists and continue your journey toward better
                  mental wellbeing.
                </p>

                {/* Benefits */}
                <div className="mt-10 space-y-4">

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <span className="text-sm text-cyan-50">
                      Connect with trusted therapists
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <span className="text-sm text-cyan-50">
                      Private and secure sessions
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <span className="text-sm text-cyan-50">
                      Support whenever you need it
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="relative z-10 mt-12 flex items-center gap-3 border-t border-white/15 pt-6">
              <ShieldCheck className="h-5 w-5 text-cyan-100" />

              <div>
                <p className="text-sm font-medium">
                  Safe & Private
                </p>

                <p className="text-xs text-cyan-100/80">
                  Your wellbeing and privacy matter to us.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16">

            <div className="w-full max-w-md">

              {/* Mobile logo */}
              <div className="mb-10 flex justify-center lg:hidden">
                <Link to="/" className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <Heart
                      className="h-5 w-5 fill-cyan-500 text-cyan-500"
                    />
                  </div>

                  <span className="text-2xl font-bold text-slate-800">
                    Therapeia
                  </span>
                </Link>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold text-cyan-600">
                  Welcome back 👋
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                  Sign in to Therapeia
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Continue your healing journey with us.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-cyan-600 transition hover:text-cyan-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-cyan-600"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">

                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                      className="h-4 w-4 rounded border-slate-300 text-cyan-600 accent-cyan-500 focus:ring-cyan-500"
                    />

                    <span className="text-sm text-slate-500">
                      Remember me
                    </span>
                  </label>

                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600 hover:shadow-cyan-500/30 active:scale-[0.99]"
                >
                  Sign In

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs text-slate-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
              >
                <div className="flex h-5 w-5 items-center justify-center font-bold text-sm">
                  G
                </div>

                Continue with Google
              </button>

              {/* Register */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Create account
                </Link>
              </p>

              {/* Privacy */}
              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4" />

                <span>
                  Your information is private and secure
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;