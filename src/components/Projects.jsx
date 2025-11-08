const projects = [
  {
    title: 'Monochrome Studio',
    role: 'Brand Identity · Packaging',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Lens & Light',
    role: 'Art Direction · Photography',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Neue Camera Co.',
    role: 'Brand System · Web',
    image: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
          <p className="mt-2 text-gray-600">A focused collection of branding, art direction, and photography.</p>
        </div>
        <a href="#contact" className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white sm:block">Start a project</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.role}</p>
              </div>
              <a href="#" className="text-sm font-semibold text-gray-900">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
