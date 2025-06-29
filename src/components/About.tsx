  export default function About() {
    return (
      <section className='max-w-3xl mx-auto py-12 px-4'>
        <h1 className='text-3xl font-bold mb-4'>About Me</h1>

        <p className='mb-4 text-lg leading-relaxed'>
          Hi! I&apos;m Jan Salama. I&apos;m a Computer Science grad, full-stack
          developer, and the founder of{' '}
          <span className='font-semibold'>EchoShock</span>, an indie game curation
          platform.
        </p>

        <p className='mb-4 text-lg leading-relaxed'>
          While my primary focus is on full-stack development, I also care deeply
          about how code ships. I built this portfolio with a complete{' '}
          <span className='font-medium'>
            CI/CD pipeline using Docker, GitHub Actions, and AWS.
          </span>{' '}
          Because automation, reliability, and fast iteration matter just as much
          as clean code.
        </p>

        <p className='mb-4 text-lg leading-relaxed'>
          I graduated from the University of Haifa in 2024 (B.Sc. Computer
          Science), joined the{' '}
          <a
            href='https://cs.hevra.haifa.ac.il/index.php/information-for-registrants-he/challenge-program'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-black transition'
          >
            Etgar Program
          </a>
          , and continued my university studies straight out of highschool.
        </p>
        <br />
        <p className='mb-4 text-lg leading-relaxed'>
          {' '}
          I just launched the first version of EchoShock and I now intend on
          polishing up this portfolio as for now it&apos;s a simple static page. I plan
          to add more features and cool stuff soon as well as more projects to
          showcase my work.
        </p>
      </section>
    )
  }
