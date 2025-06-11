import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

// Define the shape of a project
interface Project {
  name: string
  description: string
  address: string
  githubURL: string
  tags: string[]
  difficulty: number
}

const secret = process.env.PORTFOLIO_POST_REQUEST_KEY

const filePath = path.join(process.cwd(), 'data', 'projects.json')

function deepEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const projects: Project[] = JSON.parse(fileData)
      res.status(200).json(projects)
    } catch (error) {
      console.error('GET /api/projects error:', error)
      res.status(500).json({ message: 'Failed to read projects.' })
    }
  } else if (req.method === 'POST') {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader || authHeader !== `Bearer ${secret}`) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const newProject: Project = req.body
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const projects: Project[] = JSON.parse(fileData)

      const isDuplicate = projects.some((project) =>
        deepEqual(project, newProject)
      )

      if (isDuplicate) {
        return res.status(409).json({ message: 'Duplicate project exists' })
      }

      projects.push(newProject)
      fs.writeFileSync(filePath, JSON.stringify(projects, null, 2))

      res
        .status(201)
        .json({ message: 'Project added successfully', newProject })
    } catch (error) {
      console.error('POST /api/projects error:', error)
      res.status(500).json({ message: 'Failed to write new project.' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
