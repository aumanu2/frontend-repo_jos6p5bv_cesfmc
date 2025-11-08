import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur">
          Graphic Designer · Branding · Art Direction
        </span>
        <h1 className="font-geist text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Visual stories crafted with clarity and soul
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          I’m Ara, a multidisciplinary designer blending photography, typography, and minimal systems
          to build brands that feel modern, human, and memorable.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow border border-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 backdrop-blur"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
