import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to NextWorkX
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your AI-powered job recommendation platform. Find the perfect role
            in seconds.
          </p>
          <Link
            to="/login"
            className="inline-block bg-white text-amber-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-medium mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI engine analyzes your profile to suggest jobs you'll love.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-medium mb-2">Real-Time Insights</h3>
              <p className="text-gray-600">
                See application stats and improve your chances with data-driven
                tips.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-medium mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data stays safe. We never share your personal details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl mb-4">
            Ready to take the next step in your career?
          </h3>
          <Link
            to="/signup"
            className="inline-block bg-white text-amber-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
}
