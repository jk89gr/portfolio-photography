export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Contact Me</h2>
      <p className="mb-4 text-slate-600">
        Got questions or want to chat? Send me an email!
      </p>
      <a
        href="mailto:jk89gr@gmail.com?subject=Contact%20from%20Portfolio%20Website"
        className="inline-block px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-900 transition"
      >
        Send Email
      </a>
    </section>
  );
}
