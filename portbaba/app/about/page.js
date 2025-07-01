"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url(/homebg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="bg-gray-700/30 py-6 text-center shadow-lg backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Satria.
        </h1>
      </header>

      <nav className="flex justify-center gap-8 mt-8 flex-wrap">
        <Link href="/">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            About
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            Contact
          </button>
        </Link>
        <Link href="/foto">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            Foto
          </button>
        </Link>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full mx-auto bg-white/10 border-2 border-white/30 rounded-2xl p-10 shadow-xl backdrop-blur-md">
          <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
            About Me
          </h1>
          <div className="space-y-6 text-gray-100 text-lg">
            <p>
              Hello, I'm Satria Aji. I am a Front-End Developer with experience
              in building responsive and user-friendly web interfaces using
              Next.js, Tailwind CSS, and HTML. During college, I actively
              contributed in app development projects such as SoundNata (music
              player) and CatchU (Dating apps), which strengthened my skills in
              team-based web development. I have a passion for creating engaging
              user experiences and always try to keep up with the latest
              technology
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Frontend Development (React, Next.js)</li>
                <li>Backend Development</li>
                <li>UI/UX Design</li>
                <li>Responsive Web Design</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Experience
              </h2>
              <p>
                I joined the RWID Bootcamp to learn HTML, CSS, and Next.js with
                Tailwind CSS. I also designed an application using Figma called
                "Shalat Yuk!!!". In a group project, I took the role of
                front-end developer to create a music player website inspired by
                Spotify.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
