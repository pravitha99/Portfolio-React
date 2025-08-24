
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    // Normally you'd POST to a backend. For now, simulate success:
    setSent(true)
  }

  if (sent) {
    return (
      <div className="py-12">
        <h2 className="text-3xl font-bold">Thanks!</h2>
        <p className="mt-2 text-slate-700">Your message has been recorded.</p>
      </div>
    )
  }

  return (
    <section className="py-12 max-w-xl">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" value={form.name} onChange={onChange} required className="w-full mt-1 rounded-xl border px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full mt-1 rounded-xl border px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows="5" value={form.message} onChange={onChange} required className="w-full mt-1 rounded-xl border px-3 py-2"/>
        </div>
        <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Send</button>
      </form>
      <div className="mt-6 text-sm text-slate-600">
        <p>Also reach me at:</p>
        <ul className="list-disc ml-5">
          <li><a className="hover:underline" href="mailto:pravithaparthiphan99@gmail.com">pravithaparthiphan99@gmail.com</a></li>
          <li><a className="hover:underline" href="https://linkedin.com" target="https://www.linkedin.com/in/pravitha99/" >Pravitha Linkedin Profile</a></li>
          <li><a className="hover:underline" href="https://github.com" target="https://github.com/pravitha99/">Pravitha GitHub Profile</a></li>
        </ul>
      </div>
    </section>
  )
}
