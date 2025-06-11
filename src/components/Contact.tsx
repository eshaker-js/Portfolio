export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-12 px-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-2">Email: <a href="mailto:bojan.salama@gmail.com" className="underline">bojan.salama@gmail.com</a></p>
      <p>
        <a
          href="https://www.linkedin.com/in/jan-salama/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          LinkedIn Profile →
        </a>
      </p>
      <footer className="mt-20 text-sm opacity-70">
        © {new Date().getFullYear()} Jan Salama. All rights reserved.
      </footer>
    </section>
  )
}
