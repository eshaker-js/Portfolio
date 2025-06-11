'use client'

import { useEffect, useState } from 'react'

interface Project {
  // This is the interface for the project data which will be POSTed to the API as a json object
  name: string
  description: string
  address: string
  githubURL: string
  tags: string[]
  difficulty: number
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a: Project, b: Project) => b.difficulty - a.difficulty
        )
        setProjects(sorted)
      })
  }, [])

  return (
    <main className='max-w-6xl mx-auto py-12 px-4'>
      <h1 className='text-3xl font-bold mb-6'>All Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='border rounded-2xl p-5 shadow hover:shadow-lg transition flex flex-col justify-between bg-white'
          >
            <div>
              <h2 className='text-2xl font-bold mb-2'>{project.name}</h2>
              <p className='text-sm text-gray-600 mb-4 line-clamp-4'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='bg-gray-100 text-xs font-medium px-2 py-1 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex items-center gap-1 mb-4'>
                <span className='text-sm text-gray-600'>Difficulty:</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    fill={i < project.difficulty ? 'currentColor' : 'none'}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-5 h-5 text-yellow-500'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.451a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118L12 15.347l-3.376 2.451c-.784.57-1.838-.196-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L4.63 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z'
                    />
                  </svg>
                ))}
              </div>
            </div>

            <div className='flex gap-3 mt-auto pt-4 border-t'>
              {project.address ? (
                <a
                  href={project.address}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-medium text-gray-600 hover:underline bg-green-100 px-2 py-1 rounded'
                >
                  Live Demo
                </a>
              ) : (
                <span className='text-sm font-medium text-gray-600 bg-red-100 px-2 py-1 rounded'>
                  No Live Demo
                </span>
              )}
              <a
                href={project.githubURL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-medium text-gray-600 hover:underline bg-blue-200 px-2 py-1 rounded'
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
