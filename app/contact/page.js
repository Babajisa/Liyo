import Link from "next/link";

export default function Contact() {
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
        {/* <Link href="/about">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            About
          </button>
        </Link> */}
        <Link href="/contact">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            Contact
          </button>
        </Link>
        {/* <Link href="/foto">
          <button className="bg-gray-300/60 text-black font-bold text-2xl px-12 py-4 rounded-lg shadow-md hover:bg-gray-400/70 transition-all w-48 mb-4 backdrop-blur-md">
            Foto
          </button>
        </Link> */}
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full mx-auto bg-white/10 border-2 border-white/30 rounded-2xl p-10 shadow-xl backdrop-blur-md">
          <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
            Contact Me
          </h1>
          <form
            action="https://formspree.io/f/babajife82@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-white/30 bg-white/20 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 backdrop-blur-md p-3"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-white/30 bg-white/20 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 backdrop-blur-md p-3"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-md border border-white/30 bg-white/20 text-white shadow-sm focus:border-blue-400 focus:ring-blue-400 backdrop-blur-md p-3"
                placeholder=""
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600/80 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700/90 transition-all backdrop-blur-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
