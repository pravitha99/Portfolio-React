
export default function About() {
  return (
    <section className="py-12 space-y-6">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-slate-700">
        I'm a former Drupal developer (Infosys) with hands‑on experience building large content websites
        like CanadaBuys. After a career break, I'm focused on React and full‑stack development.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl border">
          <h3 className="font-semibold">Skills</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>React, JavaScript (ES2023+), HTML5, CSS3/Tailwind</li>
            <li>Node.js, Express, MongoDB (MERN)</li>
            <li>Drupal 8/9, Twig, PHP basics</li>
            <li>Git, REST APIs, Accessibility (a11y)</li>
          </ul>
        </div>
        <div className="p-5 rounded-2xl border">
          <h3 className="font-semibold">Education & Experience</h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Infosys — Drupal Developer (2y7m)</li>
            <li>Freelance projects — CMS, responsive UI</li>
            <li>Self‑study — React, MERN, system design</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
