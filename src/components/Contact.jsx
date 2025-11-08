export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Let’s build something</h2>
          <p className="mt-2 text-gray-600">Share a few details about your project and I’ll get back within 24 hours.</p>
        </div>
        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">Project details</label>
            <textarea rows="4" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none" placeholder="Describe your goals, timeline, and budget"></textarea>
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">Prefer email? hello@arastudio.co</p>
            <button type="submit" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
