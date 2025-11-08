export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">About</h2>
          <p className="mt-4 text-gray-700">
            I’m a graphic designer focused on building timeless, minimal identities for modern brands.
            With 8+ years across agencies and independent studios, I merge strategy with craftsmanship
            to deliver clear, expressive outcomes.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 sm:grid-cols-3">
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Brand Systems</li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Art Direction</li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Photography</li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Web Design</li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Editorial</li>
            <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Motion</li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-gray-900">80+</p>
            <p className="mt-1 text-sm text-gray-600">Projects delivered</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-gray-900">20</p>
            <p className="mt-1 text-sm text-gray-600">Awards & features</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-gray-900">8yr</p>
            <p className="mt-1 text-sm text-gray-600">Professional experience</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-4xl font-bold text-gray-900">100%</p>
            <p className="mt-1 text-sm text-gray-600">Remote-friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
