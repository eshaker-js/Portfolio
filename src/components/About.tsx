export default function About() {
  return (
    <section className='max-w-3xl mx-auto py-12 px-4'>
      <h1 className='text-3xl font-bold mb-4'>About Me</h1>

      <p className='mb-4 text-lg leading-relaxed'>
        Hi! I&apos;m Jan Salama. I&apos;m a Computer Science grad, DevOps engineer in
        the making, and the founder of{' '}
        <span className='font-semibold'>EchoShock</span>, an indie game curation
        platform.
      </p>

      <p className='mb-4 text-lg leading-relaxed'>
        I built my portfolio with a full CI/CD pipeline, Docker, GitHub Actions,
        and live AWS deployments. I love solving problems, shipping fast, and
        building tools that make creators shine.
      </p>

      <p className='text-lg leading-relaxed'>
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

      <p className='text-2xl leading-relaxed mt-10'>
        {' '}
        I want to note that the current design is just a functional placeholder.
        Right now, my main focus is on building{' '}
        <span className='font-semibold'>EchoShock</span>. Once that’s up and
        running, I’ll return to craft a portfolio page that is more warm, welcoming and impressive!
      </p>
    </section>
  )
}
