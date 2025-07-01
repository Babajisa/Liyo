import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "/cafe1.jpg",
    alt: "view depan",
    caption: "View Depan cafe",
  },
  {
    src: "/cafe2.jpg",
    alt: "Ngopi santai",
    caption: "Ngopi Bersama Saudara ",
  },
  {
    src: "/masjid.jpg",
    alt: "masjid",
    caption: "Masjid syeikh Zayed Solo",
  },
];

const photos2 = [
  {
    src: "/kuliah1.jpg",
    alt: "KU.01",
    caption: "Gedung KU.01",
  },
  {
    src: "/kuliah2.jpg",
    alt: "Tult",
    caption: "Telkom University Landmark Tower",
  },
  {
    src: "/kuliah3.jpg",
    alt: "Store",
    caption: "Tel-U Store",
  },
];

const photos3 = [
  {
    src: "/nevele1.jpg",
    alt: "Pemandangan Gunung",
    caption: "Foto Kelas  ",
  },
  {
    src: "/nevele2.jpg",
    alt: "bukber",
    caption: "Foto Buka Bersama ",
  },
  {
    src: "/nongki1.jpg",
    alt: "Bukber2",
    caption: "Bersama Teman Angkatan SMA",
  },
];

export default function Foto() {
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
        <h2 className="text-3xl font-bold text-white mb-8">Solo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white/10 border-2 border-white/30 rounded-2xl p-4 shadow-lg backdrop-blur-md"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-gray-200 text-center mt-2">{photo.caption}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Kampus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          {photos2.map((photo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white/10 border-2 border-white/30 rounded-2xl p-4 shadow-lg backdrop-blur-md"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-gray-200 text-center mt-2">{photo.caption}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Friend Time</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          {photos3.map((photo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white/10 border-2 border-white/30 rounded-2xl p-4 shadow-lg backdrop-blur-md"
            >
              <div className="w-full h-64 relative mb-4">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-gray-200 text-center mt-2">{photo.caption}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
