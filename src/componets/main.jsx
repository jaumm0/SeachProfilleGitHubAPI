import React from 'react';
import { Github } from 'lucide-react';

function Main() {
  return (
    <main className="min-h-screen grid place-items-center  min-h-screen">
      <section className="grid grid-rows-2 gap-12 text-TextMain">

        {/* Título */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-GradientStart">
            Explore Developer Profiles
          </h1>
          <p className="mb-3 text-xl py-2 font-medium">
            Discover GitHub users, analyze their repositories, and track their <br />
            coding journey.
          </p>
        </section>

        {/* Input e botão */}
        <section className="flex justify-center items-center gap-4">
          <div className="relative">
            <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter GitHub username"
              className="border border-gray-300 rounded-xl pl-10 pr-4 py-2 w-64"
            />
          </div>
          <button
            className="h-11 w-32 rounded-xl bg-ButtonMain text-white font-semibold hover:shadow-ButtonMain transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Search
          </button>
        </section>

      </section>
    </main>
  );
}

export default Main;
