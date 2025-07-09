import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign In to NextWorkX
        </h2>
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              placeholder="••••••••"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button (right-aligned) */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-md shadow transition-colors hover:text-amber-200"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Signup Link (right-aligned) */}
        <p className="mt-6 text-right text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-amber-600 hover:text-amber-800 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
