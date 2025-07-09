import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About NextWorkX
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We’re on a mission to make job hunting intelligent, simple, and
            human.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded by a team of engineers and recruiters, NextWorkX was born
              out of frustration with one-size-fits-all job boards. We asked
              ourselves: “What if the job search adapted to you, instead of you
              adapting to it?”
            </p>
            <p className="text-gray-700">
              Using AI and real-time analytics, we built a platform that learns
              your skills, preferences, and career goals—then surfaces only the
              roles that truly fit. No more wasted time. Just relevant
              opportunities.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://source.unsplash.com/collection/190727/800x600"
              alt="Team working together"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-gray-600">
                We push boundaries to deliver smarter, faster, and more
                personalized job matching.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Transparency</h3>
              <p className="text-gray-600">
                You control your data. We explain exactly how recommendations
                are made.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Empathy</h3>
              <p className="text-gray-600">
                Behind every algorithm is a human story. We design for real
                career journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Alice Johnson",
                role: "CEO",
                img: "https://i.pravatar.cc/150?img=32",
              },
              {
                name: "Rahim Uddin",
                role: "CTO",
                img: "https://i.pravatar.cc/150?img=12",
              },
              {
                name: "Li Wei",
                role: "Product Lead",
                img: "https://i.pravatar.cc/150?img=47",
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow p-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl mb-4">Ready to see how it works?</h3>
          <a
            href="/login"
            className="inline-block bg-amber-500 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-amber-400 transition"
          >
            Get Started
          </a>
        </div>
      </footer>
    </div>
  );
};
