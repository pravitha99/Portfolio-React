
const ProjectCard = ({ title, description, live, code, img='https://placehold.co/600x400?text=Project' }) => (
  <div className="rounded-2xl border overflow-hidden">
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-700">{description}</p>
      <div className="flex gap-3 pt-2">
        {live && <a className="text-indigo-600 hover:underline" href={live} target="_blank" rel="noreferrer">Live</a>}
        {code && <a className="text-slate-900 hover:underline" href={code} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </div>
  </div>
)

export default function Projects() {
  const data = [
    { title: 'Portfolio', description: 'TThis is a basic personal portfolio website built using HTML and CSS, featuring two main pages: Home and Contact. It’s designed to be clean, minimal, and beginner-friendly—perfect for showcasing your profile and providing a way to connect.', live: 'https://pravitha99.github.io/My-portfolio/' },
    { title: 'Booksky App', description: 'Book Management Web App I built during my career break as part of upskilling in frontend development. 🔧 Tech Stack: HTML, CSS, JavaScript 🛠️ Features: Add, view, edit, and delete books – a clean UI with complete CRUD functionality', live: 'https://pravitha99.github.io/Booksky-App/' },
  ]
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
