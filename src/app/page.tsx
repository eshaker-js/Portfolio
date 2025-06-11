import About from '@/components/About'
import Contact from '@/components/Contact'
import CertificationsSection from '@/components/Certifications'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-between p-6 sm:p-12 bg-[var(--background)] text-[var(--foreground)]'>
      {/* Header */}
      <header className='w-full max-w-4xl text-center sm:text-left'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Jan Salama</h1>
        <p className='text-lg sm:text-xl text-[var(--foreground)]/90'>
          DevOps Engineer · Full Stack Developer · Indie Game Dreamer
        </p>
      </header>
      <About />
      {/* CTA Buttons */}
      <div className='mt-8 flex flex-col sm:flex-row gap-4'>
        <a
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition'
        >
          View Resume
        </a>
        <a
          href='#contact'
          className='px-6 py-3 border border-[var(--foreground)] rounded-full font-medium hover:bg-[var(--foreground)] hover:text-[var(--background)] transition'
        >
          Contact Me
        </a>
      </div>

      <CertificationsSection />

      {/* Projects Preview */}
      <section className='w-full max-w-4xl mt-16'>
        <h2 className='text-2xl font-semibold mb-4'>Featured Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Dummy project cards – replace with dynamic mapping later */}
          <div className='bg-white text-black rounded-xl p-4 shadow-md'>
            <h3 className='font-bold text-lg mb-1'>EchoShock</h3>
            <p className='text-sm text-gray-700'>
              A curated platform for indie games built with Next.js, Supabase,
              and pure ambition.
            </p>
          </div>
          <div className='bg-white text-black rounded-xl p-4 shadow-md'>
            <h3 className='font-bold text-lg mb-1'>DevOps Portfolio</h3>
            <p className='text-sm text-gray-700'>
              This very page – running on CI/CD, Dockerized, and deployed via
              GitHub Actions on AWS.
            </p>
          </div>
        </div>
      </section>
      <Contact/>
    </div>
  )
}
