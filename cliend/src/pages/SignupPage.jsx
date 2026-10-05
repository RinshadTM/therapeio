import React, { useState } from "react";
import {
  User,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

const SignupPage = () => {
  const [accountType, setAccountType] = useState("client");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log({
      ...formData,
      accountType,
    });
  };

  return (
   <div className="min-h-screen bg-slate-50 px-4 pb-8 pt-20 sm:px-6 lg:px-8 ">

      <div className="mx-auto w-8/12 max-w-4xl rounded-none bg-white px-5 py-10 sm:px-10 md:px-14 md:py-12 lg:px-16">

        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm  text-cyan-700">
            <Sparkles className="h-3 w-3" />
            Join Theraeia Community
          </div>

          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create Your Account
          </h1>

          <p className="mx-auto mt-1 max-w-xl text-base leading-6 text-slate-500 sm:text-xs">
            Choose whether you are joining as a client seeking therapy
            <br className="hidden sm:block" />
            or a qualified therapist
          </p>

        </div>

        {/* Account Type */}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-slate-100 p-2">

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-">

            <button
              type="button"
              onClick={() => setAccountType("client")}
              className={`flex items-center justify-center gap-3 rounded-xl px-5 py-4 text-base font-semibold transition-all duration-200 ${
                accountType === "client"
                  ? "bg-white text-cyan-600 shadow-sm"
                  : "text-slate-700 hover:text-cyan-600"
              }`}
            >
              <User
                className={`h-5 w-5 ${
                  accountType === "client"
                    ? "text-cyan-500"
                    : "text-cyan-500"
                }`}
              />

              I'm a Client / Patient
            </button>

            {/* <button
              type="button"
              onClick={() => setAccountType("therapist")}
              className={`flex items-center justify-center gap-3 rounded-xl px-5 py-4 text-base font-semibold transition-all duration-200 ${
                accountType === "therapist"
                  ? "bg-white text-cyan-600 shadow-sm"
                  : "text-slate-700 hover:text-cyan-600"
              }`}
            >
              <Stethoscope
                className={`h-5 w-5 ${
                  accountType === "therapist"
                    ? "text-cyan-500"
                    : "text-cyan-500"
                }`}
              />

              I'm a Therapist / Doctor
            </button> */}

          </div>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-3xl"
        >

          {/* Full Name */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Full Legal Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Sarah Thomas"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50"
            />
          </div>

          {/* Email + Phone */}

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98470 12345"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50"
              />
            </div>

          </div>

          {/* Password + Confirm Password */}

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-cyan-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>

              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-cyan-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>

              </div>
            </div>

          </div>

          {/* Submit */}

          <button
            type="submit"
            className="mt-8 flex  w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-[0.99]"
          >
            Create My Account

            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Login */}

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-bold text-cyan-600 transition hover:text-cyan-700 hover:underline"
            >
              Login
            </a>
          </p>

        </form>

      </div>
    </div>
  );
};

export default SignupPage;