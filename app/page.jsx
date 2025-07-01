"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-[url('/homebg.jpg')]">
      <header className="bg-gray-700/40 py-8 text-center shadow-lg backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
          Satria.
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl flex flex-col gap-10">
          {/* Profile & About */}
          <section className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
            <Image
              src="/fotosatria.jpg"
              alt="Profile Photo"
              width={140}
              height={140}
              className="rounded-full object-cover border-4 border-blue-400 shadow-lg mb-2"
              priority
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-1">About Me</h2>
            <div className="text-center text-gray-700 text-lg leading-relaxed">
              <p className="mb-2 font-semibold">Satria Aji</p>
              <p className="mb-4 text-base text-gray-600">
                Web Developer & Designer
              </p>
              <p>
                Saya adalah seorang web developer yang passionate dalam
                menciptakan website yang menarik dan fungsional. Dengan
                pengalaman dalam berbagai teknologi web modern, saya berkomitmen
                untuk memberikan solusi terbaik untuk setiap proyek yang saya
                kerjakan.
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 mt-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">
                  Experience
                </h4>
                <div className="space-y-2">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <h5 className="font-medium text-gray-800">Web Developer</h5>
                    <p className="text-gray-600 text-sm">2022 - Present</p>
                    <p className="text-gray-700 text-sm">
                      Mengembangkan website responsif dan aplikasi web modern
                    </p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-3">
                    <h5 className="font-medium text-gray-800">
                      UI/UX Designer
                    </h5>
                    <p className="text-gray-600 text-sm">2021 - 2022</p>
                    <p className="text-gray-700 text-sm">
                      Mendesain interface yang user-friendly dan menarik
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">
                Education
              </h4>
              <div className="border-l-4 border-purple-400 pl-3">
                <h5 className="font-medium text-gray-800">
                  Bachelor of Computer Science
                </h5>
                <p className="text-gray-600 text-sm">Universitas Indonesia</p>
                <p className="text-gray-700 text-sm">2018 - 2022</p>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Social Media
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-2">
              {/* <a
                href="https://www.instagram.com/satria.aji____/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                title="Instagram"
              >
                <div className="rounded-full border-2 border-pink-400 group-hover:border-pink-600 bg-white p-2 shadow-lg transition-all flex items-center justify-center w-16 h-16 mb-1">
                  <Image
                    src="/instagram.jpeg"
                    alt="Instagram"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-xs text-pink-600 font-semibold">
                  Instagram
                </span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100014343368643"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                title="Facebook"
              >
                <div className="rounded-full border-2 border-blue-400 group-hover:border-blue-600 bg-white p-2 shadow-lg transition-all flex items-center justify-center w-16 h-16 mb-1">
                  <Image
                    src="/facebook.jpeg"
                    alt="Facebook"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-xs text-blue-600 font-semibold">
                  Facebook
                </span>
              </a> */}
              {/* <a
                href="https://tiktok.com/@kishiiiii__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                title="TikTok"
              >
                <div className="rounded-full border-2 border-black group-hover:border-gray-700 bg-white p-2 shadow-lg transition-all flex items-center justify-center w-16 h-16 mb-1">
                  <Image
                    src="/tiktok.jpeg"
                    alt="TikTok"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-800 font-semibold">
                  TikTok
                </span>
              </a> */}
              <a
                href="www.linkedin.com/in/satria-aji-darmawann-530630297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                title="LinkedIn"
              >
                <div className="rounded-full border-2 border-blue-700 group-hover:border-blue-900 bg-white p-2 shadow-lg transition-all flex items-center justify-center w-16 h-16 mb-1">
                  <Image
                    src="/linkedin.jpeg"
                    alt="LinkedIn"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-xs text-blue-800 font-semibold">
                  LinkedIn
                </span>
              </a>
            </div>
          </section>

          {/* Contact Me */}
          <section className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Contact Me
            </h2>
            <form className="flex flex-col gap-4 w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-black placeholder-black"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-black placeholder-black"
                required
              />
              <textarea
                placeholder="Your Message"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-black placeholder-black"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
