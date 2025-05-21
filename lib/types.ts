export type Difficulty = "Basic" | "Intermediate" | "Advanced" | "Expert"

export interface Question {
  id: number
  text: string
  code: string
  options: {
    id: string
    text: string
  }[]
  correctAnswer: string
  explanation: string
  topicId: string
  topicName: string
  difficulty: Difficulty
  javaVersion?: string
}

export interface Topic {
  id: string
  name: string
  count: number
}

export interface PaginationData {
  total: number
  page: number
  limit: number
  totalPages: number
}
