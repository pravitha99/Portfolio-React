
export default function Home() {
  return (
    <section className="py-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-indigo-600">Hello!</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">I'm Pravi — Full‑Stack Developer</h1>
        <p className="mt-4 text-slate-700">
          Ex‑Drupal developer returning to work with a React‑focused full‑stack path.
          I build clean, accessible web apps with modern tooling.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/Pravitha_Frontend_Developer_Resume.pdf" download className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Download Resume</a>
          <a href="/projects" className="px-4 py-2 rounded-xl border">View Projects</a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-indigo-200 to-pink-200 grid place-items-center">
          <span className="text-5xl">👩🏻‍💻</span>
        </div>
      </div>
    </section>
  )
}
